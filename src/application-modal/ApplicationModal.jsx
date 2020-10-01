import React, {
  useRef, useLayoutEffect, useEffect, useContext,
} from 'react';

import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

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
}) => {
  const navigationPromptCheckpointRef = React.useRef();
  const applicationIntl = React.useContext(ApplicationIntlContext);
  return (
    <LayerPortal type="modal">
      <PagePortalContext.Provider value={undefined}>
        <ModalPresentationContext.Provider value>
          <NavigationPromptCheckpoint
            ref={navigationPromptCheckpointRef}
          >
            <ModalContent
              modalClassName={modalClassName}
              title={title}
              actions={actions}
              toolbar={toolbar}
              size={size}
              onRequestClose={() => {
                if (dangerouslyDisableNavigationPromptHandling) {
                  onRequestClose();
                  return;
                }

                navigationPromptCheckpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
                  onRequestClose();
                });
              }}
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
