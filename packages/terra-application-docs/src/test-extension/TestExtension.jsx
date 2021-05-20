import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import ApplicationModal from '@cerner/terra-application/lib/application-modal/ApplicationModal'; // TODO remove eslint disable when modals work again.

const propTypes = {
  /**
   * Function called to request closing the modal
   */
  onRequestClose: PropTypes.func.isRequired,
};

const TestExtension = ({ onRequestClose }) => (
  <ApplicationModal
    onRequestClose={onRequestClose}
    title="Test Extension"
  >
    <p>Test Extension</p>
  </ApplicationModal>
);

TestExtension.propTypes = propTypes;

export default TestExtension;
