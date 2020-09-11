import React from 'react';
import ApplicationModal from '../../../../../application-modal/ApplicationModal';

const AddModal = ({ onRequestClose }) => (
  <ApplicationModal title="Add Modal" onRequestClose={onRequestClose}>
    <div style={{ padding: '1rem' }}>
      <h2>Add Modal</h2>
    </div>
  </ApplicationModal>
);

export default AddModal;
