import React from 'react';
import Button from 'terra-button';
import Modal from 'terra-application/lib/modal/Modal';

import AddOrderModal from './AddOrderModal';
import AddAllergyModal from './AddAllergyModal';

const PrintModal = ({ onRequestDismiss }) => {
  const [showAddOrderModal, setShowAddOrderModal] = React.useState(false);
  const [showAddAllergyModal, setShowAddAllergyModal] = React.useState(false);

  return (
    <Modal title="Print Modal" onRequestClose={onRequestDismiss}>
      <div style={{ padding: '1rem' }}>
        <h2>Print Modal</h2>
        {/* <br />
        <Button text="Show Add Order Modal" onClick={() => { setShowAddOrderModal(true); }} />
        {showAddOrderModal && <AddOrderModal onRequestDismiss={() => { setShowAddOrderModal(false); }} />}
        <Button text="Show Add Allergy Modal" onClick={() => { setShowAddAllergyModal(true); }} />
        {showAddAllergyModal && <AddAllergyModal onRequestDismiss={() => { setShowAddAllergyModal(false); }} />} */}
      </div>
    </Modal>
  );
};

export default PrintModal;
