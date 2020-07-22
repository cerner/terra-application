import React from 'react';

import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconTag from 'terra-icon/lib/icon/IconTag';

import ApplicationPage from '../../../../../application-page/ApplicationPage';
import ApplicationLoadingOverlay from '../../../../../application-loading-overlay';
import PagePresentingModal from '../modals/PagePresentingModal';

import ChartReviewPageContent from './content/_ChartReviewPageContent';
import AllergyProfilePage from './AllergyProfilePage';
import OrderProfilePage from './OrderProfilePage';
import PrintModal from '../modals/PrintModal';
import useDeferredInitializer from '../shared/useDeferredInitializer';

const ChartReviewPage = ({ onRequestClose }) => {
  const isInitialized = useDeferredInitializer();

  const [showAllergiesProfile, setShowAllergiesProfile] = React.useState(false);
  const [showOrderProfile, setShowOrderProfile] = React.useState(false);
  const [showPrintModal, setShowPrintModal] = React.useState(false);
  const [showPageModal, setShowPageModal] = React.useState(false);

  const pageActions = [{
    key: 'action-print',
    text: 'Print',
    icon: <IconPrinter />,
    onSelect: () => { setShowPrintModal(true); },
    isDisabled: !isInitialized,
  }, {
    key: 'action-tag',
    text: 'Show Page In Modal',
    icon: <IconTag />,
    onSelect: () => { setShowPageModal(true); },
    isDisabled: !isInitialized,
  }];

  return (
    <ApplicationPage
      title="Chart Review"
      actions={pageActions}
      onRequestClose={onRequestClose}
    >
      <ChartReviewPageContent
        onShowAllergies={() => { setShowAllergiesProfile(true); }}
        onShowOrders={() => { setShowOrderProfile(true); }}
      />
      {!isInitialized && <ApplicationLoadingOverlay isOpen backgroundStyle="light" />}
      {showAllergiesProfile && <AllergyProfilePage onRequestClose={() => { setShowAllergiesProfile(false); }} />}
      {showOrderProfile && <OrderProfilePage onRequestClose={() => { setShowOrderProfile(false); }} />}
      {showPrintModal && <PrintModal onRequestClose={() => { setShowPrintModal(false); }} />}
      {showPageModal && <PagePresentingModal onRequestClose={() => { setShowPageModal(false); }} />}
    </ApplicationPage>
  );
};

export default ChartReviewPage;
