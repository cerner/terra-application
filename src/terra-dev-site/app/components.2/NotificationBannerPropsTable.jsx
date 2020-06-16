import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /**
   * An action element to be added to the action section of the banner.
   */
  action: PropTypes.element,
  /**
   * Nodes providing the message content for the banner. Can contain text and HTML.
   */
  description: PropTypes.node,
  /**
   * Callback function triggered when Dismiss button is clicked. The presence of this prop will cause
   * the Dismiss button to be included on the banner.
   */
  onRequestDismiss: PropTypes.func,
  /**
   * The type of alert to be rendered. One of `alert`, `error`, `warning`, `unsatisfied`, `unverified`, or `advisory`.
   */
  type: PropTypes.oneOf(['alert', 'error', 'warning', 'unsatisfied', 'unverified', 'advisory']).isRequired,
};
/* eslint-enable react/no-unused-prop-types */

const PropTypesExample = () => <div />;

PropTypesExample.propTypes = propTypes;

export default PropTypesExample;
