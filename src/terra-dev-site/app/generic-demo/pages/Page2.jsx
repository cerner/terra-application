import React from 'react';
import PropTypes from 'prop-types';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconModified from 'terra-icon/lib/icon/IconModified';
import Button from 'terra-button';

import ApplicationPage from '../../../../application-page/ApplicationPage';

import Page3 from './Page3';
import AddModal from '../modals/AddModal';
import PrintModal from '../modals/PrintModal';
import HeaderActionPopup from '../shared/HeaderActionPopup';

import DemoPageContent from './content/DemoPageContent';
import Card from './content/Card';
import PendingActionsCard from './content/PendingActionsCard';
import NotificationBannersCard from './content/NotificationBannersCard';
import ErrorHandlingCard from './content/ErrorHandlingCard';
import InteractionBlockingOverlayCard from './content/InteractionBlockingOverlayCard';
import LoadingOverlayCard from './content/LoadingOverlayCard';
import NotificationDialogCard from './content/NotificationDialogCard';
import ModalManagerIntegrationCard from './content/ModalManagerIntegrationCard';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const Page2 = ({ onRequestClose }) => {
  const popupActionButtonRef = React.useRef();

  const [showPage3, setShowPage3] = React.useState(undefined);
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [showPrintModal, setShowPrintModal] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);

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
    isDisabled: true,
  }, {
    key: 'action-popup-1',
    text: 'Popup Action',
    icon: <IconModified />,
    onSelect: () => { setShowPopup(true); },
    buttonRefCallback: (ref) => { popupActionButtonRef.current = ref; },
  }];

  return (
    <ApplicationPage
      title="Page 2"
      actions={pageActions}
      onRequestClose={onRequestClose}
    >
      <DemoPageContent>
        <Card title="Page 2 Details">
          <p>Page 2 demonstrates the following features:</p>
          <ul>
            <li>Page header action that presents a modal workflow</li>
            <li>Page header action that is disabled</li>
            <li>Page header action that presents a pop-up</li>
            <li>Content that triggers Page APIs</li>
          </ul>
        </Card>
        <Card title="Additional Page Disclosure">
          <p>Page 2 presents Page 3 due changes to its local state.</p>
          <Button text="Show Page 3" onClick={() => { setShowPage3(true); }} />
        </Card>
        <NotificationBannersCard />
        <NotificationDialogCard />
        <LoadingOverlayCard />
        <ErrorHandlingCard pageTitle="Page2" />
        <InteractionBlockingOverlayCard />
        <PendingActionsCard />
        <ModalManagerIntegrationCard />
      </DemoPageContent>
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
    </ApplicationPage>
  );
};

Page2.propTypes = propTypes;

export default Page2;
