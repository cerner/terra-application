import React from 'react';

import IconTag from 'terra-icon/lib/icon/IconTag';

import ApplicationPage from '../../../../application-page/ApplicationPage';
import ApplicationLoadingOverlay from '../../../../application-loading-overlay';
import PagePresentingModal from '../modals/PagePresentingModal';

import Page1Content from './content/_Page1Content';
import Page2 from './Page2';
import useDeferredInitializer from '../shared/useDeferredInitializer';

const Page1 = ({ onRequestClose }) => {
  const isInitialized = useDeferredInitializer();

  const [showPage2, setShowPage2] = React.useState(false);
  const [showPageModal, setShowPageModal] = React.useState(false);

  const pageActions = [{
    key: 'action-tag',
    text: 'Page Modal',
    icon: <IconTag />,
    onSelect: () => { setShowPageModal(true); },
    isDisabled: !isInitialized,
  }];

  return (
    <ApplicationPage
      title="Page 1"
      actions={pageActions}
      onRequestClose={onRequestClose}
    >
      <Page1Content onDisclosePage2={() => { setShowPage2(true); }} />
      {!isInitialized && <ApplicationLoadingOverlay isOpen backgroundStyle="light" />}
      {showPage2 && <Page2 onRequestClose={() => { setShowPage2(false); }} />}
      {showPageModal && <PagePresentingModal onRequestClose={() => { setShowPageModal(false); }} />}
    </ApplicationPage>
  );
};

export default Page1;
