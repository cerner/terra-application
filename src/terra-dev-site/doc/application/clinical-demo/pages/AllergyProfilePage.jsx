import React from 'react';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import DropdownButton, { Item, Variants } from 'terra-dropdown-button';

import ApplicationPage from '../../../../../application-page/ApplicationPage';
import PageToolbar from '../../../../../application-page/_PageToolbar';

import useDeferredInitializer from '../shared/useDeferredInitializer';
import ApplicationLoadingOverlay from '../../../../../application-loading-overlay';
import AddAllergyModal from '../modals/AddAllergyModal';

import AllergiesPageContent from './content/_AllergyProfilePageContent';

const AllergyProfilePage = ({ onRequestClose }) => {
  const isInitialized = useDeferredInitializer();
  const [showAddAllergyModal, setShowAddAllergyModal] = React.useState(false);

  const pageActions = [{
    key: 'action-add-allergy',
    text: 'Add Allergy',
    icon: <IconAdd />,
    onSelect: () => { setShowAddAllergyModal(true); },
    isDisabled: !isInitialized,
  }];

  return (
    <ApplicationPage
      title="Allergy Profile"
      actions={pageActions}
      toolbar={(
        <PageToolbar>
          <DropdownButton
            label="Dropdown 1"
            variant="ghost"
          >
            <Item label="1st Option" onSelect={() => {}} />
            <Item label="2nd Option" onSelect={() => {}} />
            <Item label="3rd Option" onSelect={() => {}} />
            <Item label="4th Option" onSelect={() => {}} />
          </DropdownButton>
          <DropdownButton
            label="Dropdown 2"
            variant={Variants.EMPHASIS}
          >
            <Item label="1st Option" onSelect={() => {}} />
            <Item label="2nd Option" onSelect={() => {}} />
            <Item label="3rd Option" onSelect={() => {}} />
            <Item label="4th Option" onSelect={() => {}} />
          </DropdownButton>
        </PageToolbar>
      )}
      onRequestClose={onRequestClose}
    >
      <AllergiesPageContent />
      {!isInitialized && <ApplicationLoadingOverlay isOpen backgroundStyle="light" />}
      {showAddAllergyModal && <AddAllergyModal onRequestClose={() => { setShowAddAllergyModal(false); }} />}
    </ApplicationPage>
  );
};

export default AllergyProfilePage;
