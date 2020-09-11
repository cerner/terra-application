import React from 'react';
import Button from 'terra-button';
import ApplicationModal from '../../../../application-modal/ApplicationModal';
import PageContainer from '../../../../page-container/PageContainer';
import AllergyProfilePage from '../pages/AllergyProfilePage';
import OrderProfilePage from '../pages/OrderProfilePage';

const PagePresentingModal = ({ onRequestClose }) => {
  const [showAllergiesPage, setShowAllergiesPage] = React.useState(false);
  const [showOrdersPage, setShowOrdersPage] = React.useState(false);

  return (
    <ApplicationModal title="Page Presenting Modal" size="small" onRequestClose={onRequestClose}>
      <div style={{ padding: '1rem' }}>
        <h2>Page Presenting Modal</h2>
        <br />
        <Button text="Show Allergy Profile" onClick={() => { setShowAllergiesPage(true); }} />
        {showAllergiesPage && (
          <ApplicationModal size="large" title="Allergy Modal" onRequestClose={() => { setShowAllergiesPage(false); }}>
            <PageContainer>
              <AllergyProfilePage />
            </PageContainer>
          </ApplicationModal>
        )}
        <Button text="Show Order Profile" onClick={() => { setShowOrdersPage(true); }} />
        {showOrdersPage && (
          <ApplicationModal size="large" title="Order Modal" onRequestClose={() => { setShowOrdersPage(false); }}>
            <PageContainer>
              <OrderProfilePage />
            </PageContainer>
          </ApplicationModal>
        )}
      </div>
    </ApplicationModal>
  );
};

export default PagePresentingModal;
