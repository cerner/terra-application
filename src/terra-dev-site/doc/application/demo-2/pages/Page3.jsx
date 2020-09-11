import React from 'react';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import DropdownButton, { Item, Variants } from 'terra-dropdown-button';

import ApplicationPage from '../../../../../application-page/ApplicationPage';
import PageToolbar from '../../../../../application-page/_PageToolbar';
import PageMenu, { MenuItem, MenuItemDivider } from '../../../../../application-page/PageMenu';

import useDeferredInitializer from '../shared/useDeferredInitializer';
import ApplicationLoadingOverlay from '../../../../../application-loading-overlay';
import AddModal from '../modals/AddModal';
import PrintModal from '../modals/PrintModal';

import Page3Content from './content/_Page3Content';

const AllergyProfilePage = ({ onRequestClose }) => {
  const isInitialized = useDeferredInitializer();
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [showPrintModal, setShowPrintModal] = React.useState(false);

  const pageActions = [{
    key: 'action-add',
    text: 'Add',
    icon: <IconAdd />,
    onSelect: () => { setShowAddModal(true); },
    isDisabled: !isInitialized,
  }, {
    key: 'action-print',
    text: 'Print',
    icon: <IconPrinter />,
    onSelect: () => { setShowPrintModal(true); },
    isDisabled: !isInitialized,
  }];

  const pageMenu = (
    <PageMenu>
      <MenuItem text="Item 1" onSelect={() => {}} />
      <MenuItem text="Item 2" onSelect={() => {}} />
      <MenuItem text="Item 3" onSelect={() => {}} />
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
    <ApplicationPage
      title="Page 3"
      actions={pageActions}
      menu={pageMenu}
      toolbar={(
        <PageToolbar title="Page 3 Toolbar">
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
      <Page3Content />
      {!isInitialized && <ApplicationLoadingOverlay isOpen backgroundStyle="light" />}
      {showAddModal && <AddModal onRequestClose={() => { setShowAddModal(false); }} />}
      {showPrintModal && <PrintModal onRequestClose={() => { setShowPrintModal(false); }} />}
    </ApplicationPage>
  );
};

export default AllergyProfilePage;
