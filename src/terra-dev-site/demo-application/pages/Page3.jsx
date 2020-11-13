import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import DropdownButton, { Item, Variants } from 'terra-dropdown-button';

import Page, {
  PageActions, Action, PageMenu, MenuItem, MenuItemDivider,
} from '../../../page';

import Page4 from './Page4';
import AddModal from '../modals/AddModal';
import PrintModal from '../modals/PrintModal';

import PageToolbar from './content/PageToolbar';
import DemoPageContent from './content/DemoPageContent';
import Card from './content/Card';
import PendingActionsCard from './content/PendingActionsCard';
import NotificationBannersCard from './content/NotificationBannersCard';
import ErrorHandlingCard from './content/ErrorHandlingCard';
import InteractionBlockingOverlayCard from './content/InteractionBlockingOverlayCard';
import LoadingOverlayCard from './content/LoadingOverlayCard';
import StatusOverlayCard from './content/StatusOverlayCard';
import NotificationDialogCard from './content/NotificationDialogCard';
import ModalManagerIntegrationCard from './content/ModalManagerIntegrationCard';
import NavigationItemCard from './content/NavigationItemCard';
import ApplicationInfoCard from './content/ApplicationInfoCard';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const page3MetaData = { data: 'page-3' };

const Page3 = ({ onRequestClose }) => {
  const [showPage4, setShowPage4] = React.useState(false);
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [showPrintModal, setShowPrintModal] = React.useState(false);
  const [checkedMenuItem, setCheckedMenuItem] = React.useState('item-4');

  const pageActions = (
    <PageActions>
      <Action
        actionKey="action-add"
        label="Add"
        icon={<IconAdd />}
        onSelect={() => { setShowAddModal(true); }}
      />
      <Action
        actionKey="action-print"
        label="Print"
        icon={<IconPrinter />}
        onSelect={() => { setShowPrintModal(true); }}
      />
    </PageActions>
  );

  const pageMenu = (
    <PageMenu>
      <MenuItem
        itemKey="item-1"
        label="Item 1"
        onSelect={() => { console.log('Item 1 selected'); }}
      />
      <MenuItem
        itemKey="item-2"
        label="Item 2"
        onSelect={() => { console.log('Item 2 selected'); }}
      />
      <MenuItem
        itemKey="item-3"
        label="Item 3"
        onSelect={() => { console.log('Item 3 selected'); }}
      />
      <MenuItemDivider />
      <MenuItem
        itemKey="item-4"
        label="Item 4"
        isChecked={checkedMenuItem === 'item-4'}
        onSelect={() => {
          setCheckedMenuItem((state) => (state !== 'item-4' ? 'item-4' : undefined));
        }}
        persistMenuAfterSelect
      />
      <MenuItem
        itemKey="item-5"
        label="Item 5"
        isChecked={checkedMenuItem === 'item-5'}
        onSelect={() => {
          setCheckedMenuItem((state) => (state !== 'item-5' ? 'item-5' : undefined));
        }}
        persistMenuAfterSelect
      />
    </PageMenu>
  );

  const pageToolbar = (
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
  );

  return (
    <Page
      pageKey="page-3"
      label="Page 3"
      metaData={page3MetaData}
      actions={pageActions}
      menu={pageMenu}
      toolbar={pageToolbar}
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
        <StatusOverlayCard />
        <ErrorHandlingCard pageTitle="Page 3" />
        <InteractionBlockingOverlayCard />
        <PendingActionsCard />
        <ModalManagerIntegrationCard />
        <NavigationItemCard />
        <ApplicationInfoCard />
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
