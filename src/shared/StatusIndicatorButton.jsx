import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';

const propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const StatusIndicatorButton = ({ text, onClick }) => (
  <Button onClick={onClick} text={text} variant="neutral" />
);

StatusIndicatorButton.propTypes = propTypes;

export default StatusIndicatorButton;
