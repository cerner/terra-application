import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import DropdownButton, { Item, Variants } from 'terra-dropdown-button';

import Page, {
  PageActions, Action, CardLayout, Card,
} from '../../../page';

import Page4 from './Page4';
import AddModal from '../modals/AddModal';
import PrintModal from '../modals/PrintModal';

import PageToolbar from './content/PageToolbar';
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
      toolbar={pageToolbar}
      onRequestClose={onRequestClose}
    >
      <CardLayout>
        <Card label="Page 3 Details">
          <p>Page 3 demonstrates the following features:</p>
          <ul>
            <li>Page header action that presents a modal workflow</li>
            <li>Page header action that presents a menu</li>
            <li>Page toolbar presenting complex controls</li>
            <li>Content that triggers Page APIs</li>
          </ul>
        </Card>
        <Card label="Additional Page Disclosure">
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
      </CardLayout>
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
