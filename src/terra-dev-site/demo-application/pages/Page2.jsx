import React from 'react';
import PropTypes from 'prop-types';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconModified from 'terra-icon/lib/icon/IconModified';
import Button from 'terra-button';

import Page, {
  PageActions, Action, CardLayout, Card,
} from '../../../page';

import Page3 from './Page3';
import AddModal from '../modals/AddModal';
import PrintModal from '../modals/PrintModal';
import HeaderActionPopup from '../shared/HeaderActionPopup';

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

const page2MetaData = { data: 'page-2' };

const Page2 = ({ onRequestClose }) => {
  const popupActionButtonRef = React.useRef();

  const [showPage3, setShowPage3] = React.useState(undefined);
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [showPrintModal, setShowPrintModal] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);

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
        isDisabled
      />
      <Action
        actionKey="action-popup-1"
        label="Popup Action"
        icon={<IconModified />}
        onSelect={() => { setShowPopup(true); }}
        refCallback={(ref) => { popupActionButtonRef.current = ref; }}
      />
    </PageActions>
  );

  return (
    <Page
      pageKey="page-2"
      label="Page 2"
      metaData={page2MetaData}
      actions={pageActions}
      onRequestClose={onRequestClose}
    >
      <CardLayout>
        <Card label="Page 2 Details">
          <p>Page 2 demonstrates the following features:</p>
          <ul>
            <li>Page header action that presents a modal workflow</li>
            <li>Page header action that is disabled</li>
            <li>Page header action that presents a pop-up</li>
            <li>Content that triggers Page APIs</li>
          </ul>
        </Card>
        <Card label="Additional Page Disclosure">
          <p>Page 2 presents Page 3 due changes to its local state.</p>
          <Button text="Show Page 3" onClick={() => { setShowPage3(true); }} />
        </Card>
        <NotificationBannersCard />
        <NotificationDialogCard />
        <LoadingOverlayCard />
        <StatusOverlayCard />
        <ErrorHandlingCard pageTitle="Page 2" />
        <InteractionBlockingOverlayCard />
        <PendingActionsCard />
        <ModalManagerIntegrationCard />
        <NavigationItemCard />
        <ApplicationInfoCard />
      </CardLayout>
      {showPage3
        && <Page3 onRequestClose={() => { setShowPage3(false); }} />}
      {showAddModal
        && <AddModal onRequestClose={() => { setShowAddModal(false); }} />}
      {showPrintModal
        && <PrintModal onRequestClose={() => { setShowPrintModal(false); }} />}
      {showPopup && (
        <HeaderActionPopup
          title="Action Popup"
          targetRef={() => popupActionButtonRef.current}
          onRequestClose={() => { setShowPopup(false); }}
        >
          <div>Popup content goes here...</div>
        </HeaderActionPopup>
      )}
    </Page>
  );
};

Page2.propTypes = propTypes;

export default Page2;
