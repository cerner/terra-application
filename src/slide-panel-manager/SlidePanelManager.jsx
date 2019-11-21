import React from 'react';
import PropTypes from 'prop-types';
import TerraSlidePanelManager from 'terra-slide-panel-manager';

import { navigationPromptResolutionOptionsShape } from '../navigation-prompt';
import DisclosureContainer from '../disclosure-manager/DisclosureContainer';

const propTypes = {
  /**
   * The components to be rendered in the body of the SlidePanelManager. These components will receive the
   * disclosure capabilities through the DisclosureManger's context API.
   */
  children: PropTypes.node,
  /**
   * The desired panel behavior. Either 'squish' or 'overlay'.
   */
  panelBehavior: PropTypes.oneOf(['overlay', 'squish']),
  /**
   * The component to render within the panel above the disclosed content.
   */
  disclosureAccessory: PropTypes.element,
  /**
   * The Object (or function that returns an Object) that specifies the messages
   * used to prompt the user when disclosure dismissal occurs when pending state
   * is present.
   *
   * This prop will be fixed upon the initial mount of the component.
   */
  navigationPromptResolutionOptions: navigationPromptResolutionOptionsShape,
};

const SlidePanelManager = ({ navigationPromptResolutionOptions, ...terraSlidePanelManagerProps }) => (
  <TerraSlidePanelManager
    {...terraSlidePanelManagerProps}
    withDisclosureContainer={disclosureContent => (
      <DisclosureContainer navigationPromptResolutionOptions={navigationPromptResolutionOptions}>
        {disclosureContent}
      </DisclosureContainer>
    )}
  />
);

SlidePanelManager.propTypes = propTypes;
SlidePanelManager.defaultProps = TerraSlidePanelManager.defaultProps;

export default SlidePanelManager;
