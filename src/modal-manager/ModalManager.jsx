import React from 'react';
import ModalManager from 'terra-modal-manager';

import { navigationPromptResolutionOptionsShape } from '../navigation-prompt';
import withDisclosureContainer from '../disclosure-manager/withDisclosureContainer';

const propTypes = {
  /**
   * The Object (or function that returns an Object) that specifies the messages
   * used to prompt the user when disclosure dismissal occurs when pending state
   * is present.
   *
   * This prop will be fixed upon the initial mount of the component.
   */
  navigationPromptResolutionOptions: navigationPromptResolutionOptionsShape,
};

const ApplicationModalManager = ({ navigationPromptResolutionOptions, ...disclosureProps }) => (
  <ModalManager
    {...disclosureProps}
    withDisclosureContainer={withDisclosureContainer(navigationPromptResolutionOptions)}
  />
);

ApplicationModalManager.propTypes = propTypes;

export default ApplicationModalManager;
