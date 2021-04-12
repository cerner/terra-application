import React from 'react';

import ApplicationBase from '../../../application-base';
import ApplicationContainer from '../../../application-container/ApplicationContainer';
import { dismissTransientPresentations } from '../../../utils/transient-presentations';

import DemoApplicationNavigationLayout from './layouts/DemoApplicationNavigationLayout';
// import SimpleApplicationLayout from './layouts/SimpleApplicationLayout';
// import HeadlessApplicationLayout from './layouts/HeadlessApplicationLayout';

import ConceptProvider from './providers/ConceptProvider';
import SessionProvider from './providers/SessionProvider';

window.TEST_APP_TIMEOUT = 3000;

document.body.setAttribute('tabindex', -1);

document.addEventListener('terra-application-demo.dismiss-transient-content', () => {
  dismissTransientPresentations();
});

const applicationMetaData = {
  data: 'Demo Application data',
};

const DemoApplication = () => (
  <ApplicationBase locale="en-US" themeName="orion-fusion-theme">
    <ApplicationContainer
      applicationName="Demo Application"
      applicationVersion="0.0.0.beta"
      applicationMetaData={applicationMetaData}
    >
      <SessionProvider>
        <ConceptProvider>
          <DemoApplicationNavigationLayout />
        </ConceptProvider>
      </SessionProvider>
    </ApplicationContainer>
  </ApplicationBase>
);

export default DemoApplication;
