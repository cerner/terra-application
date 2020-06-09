import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../banner/Banner';

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
   * The type of alert to be rendered. One of `alert`, `error`, `warning`, `info`, `success`, `unsatisfied`, `unverified` or `custom`.
   */
  type: PropTypes.oneOf([
    BANNER_TYPES.ALERT,
    BANNER_TYPES.ERROR,
    BANNER_TYPES.WARNING,
    BANNER_TYPES.UNSATISFIED,
    BANNER_TYPES.UNVERIFIED,
    BANNER_TYPES.ADVISORY,
    BANNER_TYPES.INFO,
    BANNER_TYPES.SUCCESS,
    BANNER_TYPES.CUSTOM,
  ]).isRequired,
};

const PropTypesExample = ({
  action,
  custom,
  description,
  onDismiss,
  type,
}) => <div />;

PropTypesExample.propTypes = propTypes;

export default PropTypesExample;
