import React from 'react';
import ApplicationModal from '../../../application-modal/ApplicationModal';

const PrintModal = ({ onRequestClose }) => (
  <ApplicationModal title="Print Modal" onRequestClose={onRequestClose}>
    <div style={{ padding: '1rem' }}>
      <h2>Print Modal</h2>
    </div>
  </ApplicationModal>
);

export default PrintModal;
