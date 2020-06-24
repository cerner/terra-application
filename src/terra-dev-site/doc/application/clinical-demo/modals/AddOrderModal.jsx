import React from 'react';
import ApplicationModal from 'terra-application/lib/application-modal/ApplicationModal';

const AddOrderModal = ({ onRequestDismiss }) => (
  <ApplicationModal title="Add Order Modal" onRequestClose={onRequestDismiss}>
    <div style={{ padding: '1rem' }}>
      <h2>Add Order Modal</h2>
    </div>
  </ApplicationModal>
);

export default AddOrderModal;
