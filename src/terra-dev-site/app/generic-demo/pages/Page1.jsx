import React from 'react';

import IconTag from 'terra-icon/lib/icon/IconTag';

import ApplicationPage from '../../../../application-page/ApplicationPage';

import ApplicationLoadingOverlay from '../../../../application-loading-overlay';
import SuspensePage from '../../../../application-page/SuspensePage';

import PagePresentingModal from '../modals/PagePresentingModal';
import Page1Content from './content/_Page1Content';
import useDeferredInitializer from '../shared/useDeferredInitializer';

// import Page2 from './Page2';

const Page2 = React.lazy(() => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(import('./Page2'));
  }, 1000);
}));

// const Page2 = React.lazy(() => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('wut'));
//   }, 1000);
// }));

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
      {showPage2 && (
      <SuspensePage onRequestClose={() => { setShowPage2(false); }}>
        <Page2 onRequestClose={() => { setShowPage2(false); }} />
      </SuspensePage>
      )}
      {showPageModal && <PagePresentingModal onRequestClose={() => { setShowPageModal(false); }} />}
    </ApplicationPage>
  );
};

Page1.isPage = true;

export default Page1;
