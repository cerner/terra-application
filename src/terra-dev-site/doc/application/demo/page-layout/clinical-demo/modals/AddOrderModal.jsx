import React from 'react';
import Modal from 'terra-application/lib/modal/Modal';

const AddOrderModal = ({ onRequestDismiss }) => (
  <Modal title="Add Order Modal" onRequestClose={onRequestDismiss}>
    <div style={{ padding: '1rem' }}>
      <h2>Add Order Modal</h2>
    </div>
  </Modal>
);

export default AddOrderModal;
