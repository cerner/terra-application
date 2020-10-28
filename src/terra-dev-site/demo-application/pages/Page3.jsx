import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import DropdownButton, { Item, Variants } from 'terra-dropdown-button';

import Page from '../../../page/Page';
import PageToolbar from '../../../page/private/_PageToolbar';
import PageMenu, { MenuItem, MenuItemDivider } from '../../../page/PageMenu';

import Page4 from './Page4';
import AddModal from '../modals/AddModal';
import PrintModal from '../modals/PrintModal';

import DemoPageContent from './content/DemoPageContent';
import Card from './content/Card';
import PendingActionsCard from './content/PendingActionsCard';
import NotificationBannersCard from './content/NotificationBannersCard';
import ErrorHandlingCard from './content/ErrorHandlingCard';
import InteractionBlockingOverlayCard from './content/InteractionBlockingOverlayCard';
import LoadingOverlayCard from './content/LoadingOverlayCard';
import NotificationDialogCard from './content/NotificationDialogCard';
import ModalManagerIntegrationCard from './content/ModalManagerIntegrationCard';
import NavigationItemCard from './content/NavigationItemCard';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const Page3 = ({ onRequestClose }) => {
  const [showPage4, setShowPage4] = React.useState(false);
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [showPrintModal, setShowPrintModal] = React.useState(false);

  const pageActions = [{
    key: 'action-add',
    text: 'Add',
    icon: <IconAdd />,
    onSelect: () => { setShowAddModal(true); },
  }, {
    key: 'action-print',
    text: 'Print',
    icon: <IconPrinter />,
    onSelect: () => { setShowPrintModal(true); },
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
    <Page
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
      <DemoPageContent>
        <Card title="Page 3 Details">
          <p>Page 3 demonstrates the following features:</p>
          <ul>
            <li>Page header action that presents a modal workflow</li>
            <li>Page header action that presents a menu</li>
            <li>Page toolbar presenting complex controls</li>
            <li>Content that triggers Page APIs</li>
          </ul>
        </Card>
        <Card title="Additional Page Disclosure">
          <p>Page 3 presents Page 4 due changes to its local state.</p>
          <Button text="Show Page 4" onClick={() => { setShowPage4(true); }} />
        </Card>
        <NotificationBannersCard />
        <NotificationDialogCard />
        <LoadingOverlayCard />
        <ErrorHandlingCard pageTitle="Page3" />
        <InteractionBlockingOverlayCard />
        <PendingActionsCard />
        <ModalManagerIntegrationCard />
        <NavigationItemCard />
      </DemoPageContent>
      {showPage4
        && <Page4 onRequestClose={() => { setShowPage4(false); }} />}
      {showAddModal
        && <AddModal onRequestClose={() => { setShowAddModal(false); }} />}
      {showPrintModal
        && <PrintModal onRequestClose={() => { setShowPrintModal(false); }} />}
    </Page>
  );
};

Page3.propTypes = propTypes;

export default Page3;
