import React, {
  useEffect, useContext, useRef, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import DisclosureManagerContext from 'terra-disclosure-manager/lib/DisclosureManagerContext';

import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, navigationPromptResolutionOptionsShape, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import ApplicationErrorBoundary from '../application-error-boundary';
import { pushCallback, popCallback } from './_disclosureCallbackStack';

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

/**
 * injectIntl (rather that the ApplicationIntlContext) is used here to keep the DisclosureContainer's context dependencies
 * passive with previous v1.x versions. ApplicationIntlContext cannot be used here without a version bump.
 */

const DisclosureContainer = injectIntl(({ intl, children, navigationPromptResolutionOptions }) => {
  const disclosureManager = useContext(DisclosureManagerContext);
  const promptCheckpointRef = useRef();

  const defaultPromptOptions = useMemo(() => getUnsavedChangesPromptOptions(intl), [intl]);

  useEffect(() => {
    pushCallback(disclosureManager.goBack || disclosureManager.closeDisclosure);

    return () => {
      popCallback();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    disclosureManager.registerDismissCheck(() => new Promise((resolve, reject) => {
      if (!promptCheckpointRef.current) {
        resolve();
        return;
      }

      promptCheckpointRef.current.resolvePrompts(navigationPromptResolutionOptions || defaultPromptOptions).then(resolve, reject);
    }));
  }, [defaultPromptOptions, disclosureManager, navigationPromptResolutionOptions]);

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
});

DisclosureContainer.propTypes = propTypes;

export default DisclosureContainer;
