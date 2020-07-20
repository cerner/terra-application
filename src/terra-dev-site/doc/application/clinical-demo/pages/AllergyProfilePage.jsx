import React from 'react';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import ApplicationPage from '../../../../../application-page/ApplicationPage';

import useDeferredInitializer from '../shared/useDeferredInitializer';
import ApplicationLoadingOverlay from '../../../../../application-loading-overlay';
import AddAllergyModal from '../modals/AddAllergyModal';

import AllergiesPageContent from './content/_AllergyProfilePageContent';

const AllergyProfilePage = ({ onRequestClose }) => {
  const isInitialized = useDeferredInitializer();
  const [showAddAllergyModal, setShowAddAllergyModal] = React.useState(false);

  const pageActions = [{
    key: 'action-add-allergy',
    text: 'Print',
    icon: <IconAdd />,
    onSelect: () => { setShowAddAllergyModal(true); },
    isDisabled: !isInitialized,
  }];

  return (
    <ApplicationPage
      title="Allergy Profile"
      actions={pageActions}
      onRequestClose={onRequestClose}
    >
      <AllergiesPageContent />
      {!isInitialized && <ApplicationLoadingOverlay isOpen backgroundStyle="light" />}
      {showAddAllergyModal && <AddAllergyModal onRequestClose={() => { setShowAddAllergyModal(false); }} />}
    </ApplicationPage>
  );
};

export default AllergyProfilePage;
