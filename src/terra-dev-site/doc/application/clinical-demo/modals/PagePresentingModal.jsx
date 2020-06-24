import React from 'react';
import ApplicationModal from 'terra-application/lib/application-modal/ApplicationModal';
import Button from 'terra-button';
import AllergyProfilePage from '../pages/AllergyProfilePage';
import OrderProfilePage from '../pages/OrderProfilePage';

const PagePresentingModal = ({ onRequestDismiss }) => {
  const [showAllergiesPage, setShowAllergiesPage] = React.useState(false);
  const [showOrdersPage, setShowOrdersPage] = React.useState(false);

  return (
    <ApplicationModal title="Page Presenting Modal" onRequestClose={onRequestDismiss}>
      <div style={{ padding: '1rem' }}>
        <h2>Page Presenting Modal</h2>
        <br />
        <Button text="Show Allergy Profile" onClick={() => { setShowAllergiesPage(true); }} />
        {showAllergiesPage && <AllergyProfilePage onRequestDismiss={() => { setShowAllergiesPage(false); }} />}
        <Button text="Show Order Profile" onClick={() => { setShowOrdersPage(true); }} />
        {showOrdersPage && <OrderProfilePage onRequestDismiss={() => { setShowOrdersPage(false); }} />}
      </div>
    </ApplicationModal>
  );
};

export default PagePresentingModal;
