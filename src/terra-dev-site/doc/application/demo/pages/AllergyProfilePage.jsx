import React from 'react';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import DropdownButton, { Item, Variants } from 'terra-dropdown-button';

import ApplicationPage from '../../../../../application-page/ApplicationPage';
import PageToolbar from '../../../../../application-page/_PageToolbar';
import PageMenu, { MenuItem, MenuItemDivider } from '../../../../../application-page/PageMenu';

import useDeferredInitializer from '../shared/useDeferredInitializer';
import ApplicationLoadingOverlay from '../../../../../application-loading-overlay';
import AddAllergyModal from '../modals/AddAllergyModal';

import AllergiesPageContent from './content/_AllergyProfilePageContent';
import SkipToLink from '../../../../../application-container/SkipToLink';

const AllergyProfilePage = ({ onRequestClose }) => {
  const isInitialized = useDeferredInitializer();
  const [showAddAllergyModal, setShowAddAllergyModal] = React.useState(false);
  const [showMenuItemModal, setShowMenuItemModal] = React.useState(undefined);
  const textAreaRef = React.useRef();

  const pageActions = [{
    key: 'action-add-allergy',
    text: 'Add Allergy',
    icon: <IconAdd />,
    onSelect: () => { setShowAddAllergyModal(true); },
    isDisabled: !isInitialized,
  }];

  const pageMenu = (
    <PageMenu>
      <MenuItem text="Item 1" onSelect={() => { setShowMenuItemModal('Item 1'); }} />
      <MenuItem text="Item 2" onSelect={() => { setShowMenuItemModal('Item 2'); }} />
      <MenuItem text="Item 3" onSelect={() => { setShowMenuItemModal('Item 3'); }} />
      <MenuItemDivider />
      <MenuItem text="Item 4">
        <MenuItem text="Sub Item 1" onSelect={() => {}} />
        <MenuItem text="Sub Item 2" onSelect={() => {}} />
        <MenuItem text="Sub Item 3" onSelect={() => {}} />
      </MenuItem>
      <MenuItem text="Item 5">
        <MenuItem text="Sub Item 4" onSelect={() => {}} />
        <MenuItem text="Sub Item 5" onSelect={() => {}} />
        <MenuItem text="Sub Item 6" onSelect={() => {}} />
      </MenuItem>
    </PageMenu>
  );

  return (
    <>
      <SkipToLink
        description="Skip to Allergies Page Text Area"
        callback={() => {
          textAreaRef.current.focus();
        }}
      />
      <ApplicationPage
        title="Allergy Profile"
        actions={pageActions}
        menu={pageMenu}
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
        <p>
          Selected Menu Item:
          {' '}
          {showMenuItemModal}
        </p>
        {!isInitialized && <ApplicationLoadingOverlay isOpen backgroundStyle="light" />}
        {showAddAllergyModal && <AddAllergyModal onRequestClose={() => { setShowAddAllergyModal(false); }} />}
        <div style={{ padding: '1rem', width: '100%' }}>
          <textarea ref={textAreaRef} style={{ width: '100%' }} />
        </div>
      </ApplicationPage>
    </>
  );
};

export default AllergyProfilePage;
