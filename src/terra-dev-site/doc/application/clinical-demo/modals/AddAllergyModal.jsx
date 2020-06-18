import React from 'react';
import Modal from 'terra-application/lib/modal/Modal';

const AddAllergyModal = ({ onRequestDismiss }) => (
  <Modal title="Add Allergy Modal" onRequestClose={onRequestDismiss}>
    <div style={{ padding: '1rem' }}>
      <h2>Add Allergy Modal</h2>
    </div>
  </Modal>
);

export default AddAllergyModal;
