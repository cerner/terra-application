import React, {
  useRef, useLayoutEffect, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { KEY_ESCAPE } from 'keycode-js';

import LayerPortal from '../layers/LayerPortal';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import { ApplicationIntlContext } from '../application-intl';
import ModalPageContainer from '../application-page/container/ModalPageContainer';

import 'mutationobserver-shim';
import './_contains-polyfill';
import './_matches-polyfill';

import ModalContent from './_ModalContent';
import ModalPresentationContext from './ModalPresentationContext';
import PagePortalContext from '../application-page/private/PagePortalContext';

const propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({})),
  size: PropTypes.oneOf(['small', 'large']),
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const ApplicationModal = ({
  title,
  toolbar,
  size,
  actions,
  onRequestClose,
  children,
  renderPage,
  modalClassName,
  dangerouslyDisableNavigationPromptHandling,
  onInert,
}) => {
  const navigationPromptCheckpointRef = React.useRef();
  const modalContainerRef = React.useRef();
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const [inert, setInert] = React.useState(false);

  function safeRequestClose() {
    if (dangerouslyDisableNavigationPromptHandling) {
      onRequestClose();
      return;
    }

    navigationPromptCheckpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
      onRequestClose();
    });
  }

  React.useEffect(() => {
    setTimeout(() => {
      // Handle focus shift for VoiceOver on iOS
      if ('ontouchstart' in window) {
        modalContainerRef.current.querySelector('[data-terra-abstract-modal-begin]').focus();
      } else {
        // Shift focus to modal dialog
        modalContainerRef.current.focus();
      }
    }, 0);
  }, []);

  React.useEffect(() => {
    if (inert) {
      return undefined;
    }

    function handleKeydown(e) {
      if (e.keyCode === KEY_ESCAPE) {
        const body = document.querySelector('body');
        if (e.target === modalContainerRef.current || modalContainerRef.current.contains(e.target) || e.target === body) {
          safeRequestClose();
        }
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [safeRequestClose, inert]);

  React.useEffect(() => {
    if (onInert) {
      onInert(inert);
    }
  }, [inert, onInert]);

  return (
    <LayerPortal
      type="modal"
      setInert={setInert}
    >
      <PagePortalContext.Provider value={undefined}>
        <ModalPresentationContext.Provider value>
          <NavigationPromptCheckpoint
            ref={navigationPromptCheckpointRef}
          >
            <ModalContent
              refCallback={(ref) => { modalContainerRef.current = ref; }}
              modalClassName={modalClassName}
              title={title}
              actions={actions}
              toolbar={toolbar}
              size={size}
              onRequestClose={safeRequestClose}
              aria-modal="true"
            >
              {renderPage ? (
                <ModalPageContainer>
                  {renderPage()}
                </ModalPageContainer>
              ) : children}
            </ModalContent>
          </NavigationPromptCheckpoint>
        </ModalPresentationContext.Provider>
      </PagePortalContext.Provider>
    </LayerPortal>
  );
};

ApplicationModal.propTypes = propTypes;

export default ApplicationModal;
