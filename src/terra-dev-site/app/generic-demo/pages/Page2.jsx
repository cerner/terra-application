import React from 'react';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconModified from 'terra-icon/lib/icon/IconModified';

import ApplicationPage from '../../../../application-page/ApplicationPage';
import ApplicationBlockingOverlay from '../../../../application-blocking-overlay/ApplicationBlockingOverlay';
import ApplicationLoadingOverlay from '../../../../application-loading-overlay';
import withPageSafeguards from '../../../../application-page/withPageSafeguards';

import Page2Content from './content/_Page2Content';
import Page3 from './Page3';
import AddModal from '../modals/AddModal';
import PrintModal from '../modals/PrintModal';
import useDeferredInitializer from '../shared/useDeferredInitializer';
import HeaderActionPopup from '../shared/HeaderActionPopup';

const Page2 = ({ onRequestClose }) => {
  const isInitialized = useDeferredInitializer();

  // const [saveOrders, setSaveOrders] = React.useState(false);

  const popupActionButtonRef = React.useRef();

  const [showPage3, setShowPage3] = React.useState(undefined);
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [showPrintModal, setShowPrintModal] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);
  const [throwError, setThrowError] = React.useState(false);

  // React.useEffect(() => {
  //   if (!saveOrders) {
  //     return undefined;
  //   }

  //   const timeout = setTimeout(() => {
  //     setSaveOrders(false);
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [saveOrders]);

  if (throwError) {
    throw new Error('Page2 threw error to test Page-level error handling');
  }

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
  }, {
    key: 'action-popup-1',
    text: 'Popup Action',
    icon: <IconModified />,
    onSelect: () => { setShowPopup(true); },
    buttonRefCallback: (ref) => { popupActionButtonRef.current = ref; },
    isDisabled: !isInitialized,
  }];

  return (
    <ApplicationPage
      title="Page 2"
      actions={pageActions}
      onRequestClose={onRequestClose}
    >
      <Page2Content
        onDisclosePage3={() => { setShowPage3(true); }}
        onThrowError={() => { setThrowError(true); }}
      />
      {!isInitialized
        && <ApplicationLoadingOverlay isOpen backgroundStyle="light" />}
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

export default withPageSafeguards(Page2, { defaultTitleId: 'page-2.title' });
