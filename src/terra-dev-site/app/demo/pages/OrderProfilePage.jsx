import React from 'react';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconTrash from 'terra-icon/lib/icon/IconTrash';
import IconModified from 'terra-icon/lib/icon/IconModified';

import ApplicationPage from '../../../../application-page/ApplicationPage';
import ApplicationBlockingOverlay from '../../../../application-blocking-overlay/ApplicationBlockingOverlay';
import ApplicationLoadingOverlay from '../../../../application-loading-overlay';

import OrderProfilePageContent from './content/_OrderProfilePageContent';
import AllergyProfilePage from './AllergyProfilePage';
import AddOrderModal from '../modals/AddOrderModal';
import PrintModal from '../modals/PrintModal';
import useDeferredInitializer from '../shared/useDeferredInitializer';
import HeaderActionPopup from '../shared/HeaderActionPopup';

const OrderProfilePage = ({ onRequestClose }) => {
  const isInitialized = useDeferredInitializer();

  const [saveOrders, setSaveOrders] = React.useState(false);

  const popupAction1ButtonRef = React.useRef();
  const popupAction2ButtonRef = React.useRef();

  const [showDetails, setShowDetails] = React.useState(undefined);
  const [showAllergiesProfile, setShowAllergiesProfile] = React.useState(false);
  const [showAddOrderModal, setShowAddOrderModal] = React.useState(false);
  const [showPrintModal, setShowPrintModal] = React.useState(false);
  const [showPopup1, setShowPopup1] = React.useState(false);
  const [showPopup2, setShowPopup2] = React.useState(false);

  React.useEffect(() => {
    if (!saveOrders) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setSaveOrders(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [saveOrders]);

  const pageActions = [{
    key: 'action-add-order',
    text: 'Add Order',
    icon: <IconAdd />,
    onSelect: () => { setShowAddOrderModal(true); },
    isDisabled: !isInitialized,
  }, {
    key: 'action-popup-1',
    text: 'Popup 1',
    icon: <IconModified />,
    onSelect: () => { setShowPopup1(true); },
    buttonRefCallback: (ref) => { popupAction1ButtonRef.current = ref; },
    isDisabled: !isInitialized,
  }, {
    key: 'action-print',
    text: 'Print',
    icon: <IconPrinter />,
    onSelect: () => { setShowPrintModal(true); },
    isDisabled: !isInitialized,
  }, {
    key: 'action-popup-2',
    text: 'Popup 2',
    icon: <IconTrash />,
    onSelect: () => { setShowPopup2(true); },
    buttonRefCallback: (ref) => { popupAction2ButtonRef.current = ref; },
    isDisabled: !isInitialized,
  }];

  return (
    <ApplicationPage
      title="Order Profile"
      actions={pageActions}
      onRequestClose={onRequestClose}
    >
      <OrderProfilePageContent
        onShowAllergies={() => { setShowAllergiesProfile(true); }}
        onShowDetails={(value) => { setShowDetails(value); }}
        onSaveOrders={() => { setSaveOrders(true); }}
      />
      {!isInitialized
        && <ApplicationLoadingOverlay isOpen backgroundStyle="light" />}
      {saveOrders
        && <ApplicationBlockingOverlay />}
      {showDetails
        && (
          <ApplicationPage title={`${showDetails} Details`} onRequestClose={() => { setShowDetails(undefined); }}>
            <div style={{ padding: '1rem' }}>
              <h1>
                {showDetails}
                {' '}
                details here...
              </h1>
            </div>
          </ApplicationPage>
        )}
      {showAllergiesProfile
        && <AllergyProfilePage onRequestClose={() => { setShowAllergiesProfile(false); }} />}
      {showAddOrderModal
        && <AddOrderModal onRequestClose={() => { setShowAddOrderModal(false); }} />}
      {showPrintModal
        && <PrintModal onRequestClose={() => { setShowPrintModal(false); }} />}
      {showPopup1 && (
        <HeaderActionPopup
          title="Popup 1"
          targetRef={() => popupAction1ButtonRef.current}
          onRequestClose={() => { setShowPopup1(false); }}
        >
          <div>Popup Action 1</div>
        </HeaderActionPopup>
      )}
      {showPopup2 && (
        <HeaderActionPopup
          title="Popup 2"
          targetRef={() => popupAction2ButtonRef.current}
          onRequestClose={() => { setShowPopup2(false); }}
        >
          <div>Popup Action 2</div>
        </HeaderActionPopup>
      )}
    </ApplicationPage>
  );
};

export default OrderProfilePage;
