import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /**
   * An action element to be added to the action section of the banner.
   */
  action: PropTypes.element,
  /**
   * The pieces to populate a banner when type=`custom`.
   */
  custom: PropTypes.shape({
    /**
     * The title for the banner which will be bolded.
     */
    bannerTitle: PropTypes.string,
    /**
     * The class name used to set the icon in the banner.
     */
    icon: PropTypes.element,
    /**
     * Sets an author-defined class, to control the status bar color to be used.
     */
    colorClass: PropTypes.string,
  }),
  /**
   * Nodes providing the message content for the banner. Can contain text and HTML.
   */
  description: PropTypes.node,
  /**
   * Callback function triggered when Dismiss button is clicked. The presence of this prop will cause
   * the Dismiss button to be included on the banner.
   */
  onDismiss: PropTypes.func,
  /**
   * The type of alert to be rendered. One of `alert`, `error`, `warning`, `unsatisfied`, `unverified`, `advisory`, `info`, `success`, or `custom`.
   */
  type: PropTypes.oneOf(['alert', 'error', 'warning', 'unsatisfied', 'unverified', 'advisory', 'info', 'success', 'custom']).isRequired,
};
/* eslint-enable react/no-unused-prop-types */

const PropTypesExample = () => <div />;

PropTypesExample.propTypes = propTypes;

export default PropTypesExample;
