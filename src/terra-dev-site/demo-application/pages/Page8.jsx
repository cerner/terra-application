import React from 'react';
import PropTypes from 'prop-types';

import Page, {
  PageActivityOverlay,
} from '../../../page';
import Suspense from '../../../shared/Suspense';

const SuspenseContent = React.lazy(() => new Promise((resolve, reject) => {
  setTimeout(() => resolve(import('./content/SuspenseContent')), 5000);
}));

const propTypes = {
  onRequestClose: PropTypes.func,
};

const Page8 = ({ onRequestClose }) => {
  const [isLoadingComponent, setIsLoadingComponent] = React.useState();
  const [loadingFailed, setLoadingFailed] = React.useState();

  let loadingOverlay;
  if (isLoadingComponent) {
    loadingOverlay = (
      <PageActivityOverlay variant="loading" />
    );
  }

  let failureStatus;
  if (loadingFailed) {
    // TODO add failure scenario when Page supports status
    // failureStatus = <StatusLayout variant="error" />;
  }

  return (
    <Page
      pageKey="page-8"
      label="Page 8"
      onRequestClose={onRequestClose}
      activityOverlay={loadingOverlay}
      statusOverlay={failureStatus}
    >
      <Suspense
        onLoadStart={() => { setIsLoadingComponent(true); }}
        onLoadEnd={() => { setIsLoadingComponent(false); }}
        onError={() => { setLoadingFailed(true); setIsLoadingComponent(false); }}
      >
        <SuspenseContent />
      </Suspense>
    </Page>
  );
};

Page8.propTypes = propTypes;

export default Page8;
