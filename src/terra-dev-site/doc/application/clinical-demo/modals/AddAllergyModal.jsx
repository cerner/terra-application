import React from 'react';
import ApplicationModal from 'terra-application/lib/application-modal/ApplicationModal';

const AddAllergyModal = ({ onRequestClose }) => (
  <ApplicationModal title="Add Allergy Modal" onRequestClose={onRequestClose}>
    <div style={{ padding: '1rem' }}>
      <h2>Add Allergy Modal</h2>
    </div>
  </ApplicationModal>
);

export default AddAllergyModal;
