import React from 'react';
import Modal from 'terra-application/lib/modal/Modal';
import Button from 'terra-button';
import AllergiesPage from '../pages/AllergiesPage';
import OrdersPage from '../pages/OrdersPage';

const PagePresentingModal = ({ onRequestDismiss }) => {
  const [showAllergiesPage, setShowAllergiesPage] = React.useState(false);
  const [showOrdersPage, setShowOrdersPage] = React.useState(false);

  return (
    <Modal title="Page Presenting Modal" onRequestClose={onRequestDismiss}>
      <div style={{ padding: '1rem' }}>
        <h2>Page Presenting Modal</h2>
        <br />
        <Button text="Show Allergy Profile" onClick={() => { setShowAllergiesPage(true); }} />
        {showAllergiesPage && <AllergiesPage onRequestDismiss={() => { setShowAllergiesPage(false); }} />}
        <Button text="Show Order Profile" onClick={() => { setShowOrdersPage(true); }} />
        {showOrdersPage && <OrdersPage onRequestDismiss={() => { setShowOrdersPage(false); }} />}
      </div>
    </Modal>
  );
};

export default PagePresentingModal;
