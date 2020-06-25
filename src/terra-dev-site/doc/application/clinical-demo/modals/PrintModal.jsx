import React from 'react';
import Button from 'terra-button';
import ApplicationModal from '../../../../../application-modal/ApplicationModal';

import AddOrderModal from './AddOrderModal';
import AddAllergyModal from './AddAllergyModal';

const PrintModal = ({ onRequestClose }) => {
  const [showAddOrderModal, setShowAddOrderModal] = React.useState(false);
  const [showAddAllergyModal, setShowAddAllergyModal] = React.useState(false);

  return (
    <ApplicationModal title="Print Modal" onRequestClose={onRequestClose}>
      <div style={{ padding: '1rem' }}>
        <h2>Print Modal</h2>
        {/* <br />
        <Button text="Show Add Order Modal" onClick={() => { setShowAddOrderModal(true); }} />
        {showAddOrderModal && <AddOrderModal onRequestClose={() => { setShowAddOrderModal(false); }} />}
        <Button text="Show Add Allergy Modal" onClick={() => { setShowAddAllergyModal(true); }} />
        {showAddAllergyModal && <AddAllergyModal onRequestClose={() => { setShowAddAllergyModal(false); }} />} */}
      </div>
    </ApplicationModal>
  );
};

export default PrintModal;
