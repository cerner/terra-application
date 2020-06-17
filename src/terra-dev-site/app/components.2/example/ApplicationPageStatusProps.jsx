import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';

/**
 * The props table parser continues to have trouble detecting the propTypes of a component that
 * returns `null`. The propType definition is duplicated here so that a table could be parsed for it.
 */

const propTypes = {
  /**
   * An array of objects containing terra-button properties. A key attribute is required for each object.
   * This array is used to render buttons in the bottom section.
   * Example:`[{ text: 'Button 1', key: 1, size: 'medium', variant: 'action', onClick: onClickFunction}]`
   */
  // eslint-disable-next-line react/forbid-foreign-prop-types
  buttonAttrs: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),

  /**
   * The descriptive text, displayed under the title.
   */
  message: PropTypes.string,

  /**
   * The title displayed under the glyph. Variants contain default titles that can be overridden by this prop.
   */
  title: PropTypes.string,

  /**
   * Sets the glyph and title using a pre-baked variant. One of the following: `no-data`,
   * `no-matching-results`, `not-authorized`, or `error`
   */
  variant: PropTypes.oneOf(['no-data', 'no-matching-results', 'not-authorized', 'error']),
};

/* eslint-disable no-unused-vars */
const ApplicationPageStatusProps = ({
  buttonAttrs,
  message,
  title,
  variant,
}) => <div />;

ApplicationPageStatusProps.propTypes = propTypes;

export default ApplicationPageStatusProps;
