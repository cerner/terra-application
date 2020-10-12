import React, { Suspense } from 'react';

import ApplicationLoadingOverlay from '../application-loading-overlay';
import ApplicationPage from './ApplicationPage';
import withPageSafeguards from './withPageSafeguards';

// const SuspensePageFallback = ({ title, onRequestClose }) => (
//   <ApplicationPage title={title} onRequestClose={onRequestClose}>
//     <ApplicationLoadingOverlay isOpen />
//   </ApplicationPage>
// );

const SuspensePage = (props) => (
  <Suspense fallback={<ApplicationLoadingOverlay isOpen backgroundStyle="light" />}>
    {props.children}
  </Suspense>
);

export default withPageSafeguards(SuspensePage);
