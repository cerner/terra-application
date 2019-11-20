import React from 'react';
import SlidePanelManager from 'terra-slide-panel-manager';

import { navigationPromptResolutionOptionsShape } from '../navigation-prompt';
import withDisclosureContainer from '../disclosure-manager/withDisclosureContainer';

const propTypes = {
  ...SlidePanelManager.propTypes,
  /**
   * The Object (or function that returns an Object) that specifies the messages
   * used to prompt the user when disclosure dismissal occurs when pending state
   * is present.
   *
   * This prop will be fixed upon the initial mount of the component.
   */
  navigationPromptResolutionOptions: navigationPromptResolutionOptionsShape,
};

const ApplicationSlidePanelManager = ({ navigationPromptResolutionOptions, ...slidePanelProps }) => {
  return (
    <SlidePanelManager
      {...slidePanelProps}
      withDisclosureContainer={withDisclosureContainer(navigationPromptResolutionOptions)}
    />
  );
};

ApplicationSlidePanelManager.propTypes = propTypes;
ApplicationSlidePanelManager.defaultProps = SlidePanelManager.defaultProps;

export default ApplicationSlidePanelManager;
