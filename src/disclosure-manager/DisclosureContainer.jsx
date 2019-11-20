import React, { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import DisclosureManagerContext from 'terra-disclosure-manager/lib/DisclosureManagerContext';

import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, navigationPromptResolutionOptionsShape } from '../navigation-prompt';
import ApplicationErrorBoundary from '../application-error-boundary';

const propTypes = {
  /**
   * The components to render within the context of the DisclosureContainer.
   */
  children: PropTypes.node,
  /**
   * The Object (or function that returns an Object) that specifies the messages
   * used to prompt the user when disclosure dismissal occurs when pending state
   * is present.
   */
  navigationPromptResolutionOptions: navigationPromptResolutionOptionsShape,
};

const DisclosureContainer = ({ children, navigationPromptResolutionOptions }) => {
  const disclosureManager = useContext(DisclosureManagerContext);
  const promptCheckpointRef = useRef();

  useEffect(() => {
    disclosureManager.registerDismissCheck(() => new Promise((resolve, reject) => {
      if (!promptCheckpointRef.current) {
        resolve();
        return;
      }

      promptCheckpointRef.current.resolvePrompts(navigationPromptResolutionOptions).then(resolve, reject);
    }));
  }, [disclosureManager, navigationPromptResolutionOptions]);

  return (
    <ApplicationErrorBoundary>
      <ApplicationLoadingOverlayProvider>
        <NavigationPromptCheckpoint
          ref={promptCheckpointRef}
        >
          {children}
        </NavigationPromptCheckpoint>
      </ApplicationLoadingOverlayProvider>
    </ApplicationErrorBoundary>
  );
};

DisclosureContainer.propTypes = propTypes;

export default DisclosureContainer;
