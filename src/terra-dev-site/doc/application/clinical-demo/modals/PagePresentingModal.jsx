import React from 'react';
import Button from 'terra-button';
import ApplicationModal from '../../../../../application-modal/ApplicationModal';
import AllergyProfilePage from '../pages/AllergyProfilePage';
import OrderProfilePage from '../pages/OrderProfilePage';

const PagePresentingModal = ({ onRequestClose }) => {
  const [showAllergiesPage, setShowAllergiesPage] = React.useState(false);
  const [showOrdersPage, setShowOrdersPage] = React.useState(false);

  return (
    <ApplicationModal title="Page Presenting Modal" onRequestClose={onRequestClose}>
      <div style={{ padding: '1rem' }}>
        <h2>Page Presenting Modal</h2>
        <br />
        <Button text="Show Allergy Profile" onClick={() => { setShowAllergiesPage(true); }} />
        {showAllergiesPage && <AllergyProfilePage onRequestClose={() => { setShowAllergiesPage(false); }} />}
        <Button text="Show Order Profile" onClick={() => { setShowOrdersPage(true); }} />
        {showOrdersPage && <OrderProfilePage onRequestClose={() => { setShowOrdersPage(false); }} />}
      </div>
    </ApplicationModal>
  );
};

export default PagePresentingModal;
