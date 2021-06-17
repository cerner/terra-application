import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';

const propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const StatusLayoutButton = ({ text, onClick }) => (
  <Button onClick={onClick} text={text} variant="neutral" />
);

StatusLayoutButton.propTypes = propTypes;

export default StatusLayoutButton;
