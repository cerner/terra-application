import React, {
  useRef, useLayoutEffect, useEffect, useContext,
} from 'react';

import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import LayerPortal from '../layers/LayerPortal';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import { ApplicationIntlContext } from '../application-intl';

import 'mutationobserver-shim';
import './_contains-polyfill';
import './_matches-polyfill';

import ModalContent from './_ModalContent';
import ApplicationPageContext from '../application-page/ApplicationPageContext';

const propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({})),
  size: PropTypes.oneOf(['small', 'large']),
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const ApplicationModal = ({
  title,
  size,
  actions,
  onRequestClose,
  children,
}) => {
  const navigationPromptCheckpointRef = React.useRef();
  const applicationIntl = React.useContext(ApplicationIntlContext);
  return (
    <LayerPortal>
      <ApplicationPageContext.Provider value={undefined}>
        <NavigationPromptCheckpoint
          ref={navigationPromptCheckpointRef}
        >
          <ModalContent
            title={title}
            actions={actions}
            size={size}
            onRequestClose={() => {
              navigationPromptCheckpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
                onRequestClose();
              });
            }}
            aria-modal="true"
          >
            {children}
          </ModalContent>
        </NavigationPromptCheckpoint>
      </ApplicationPageContext.Provider>
    </LayerPortal>
  );
};

ApplicationModal.propTypes = propTypes;

export default ApplicationModal;
