import React from 'react';

import ApplicationBase from '../../application-base';
import ApplicationContainer from '../../application-container/ApplicationContainer';

import DemoApplicationNavigation from './generic-demo/layouts/DemoApplicationNavigationLayout';
import ConceptProvider from './generic-demo/app-containers/ConceptProvider';
import SessionProvider from './generic-demo/app-containers/SessionProvider';

window.TEST_APP_TIMEOUT = 3000;

document.body.setAttribute('tabindex', -1);

const DemoApplication = () => (
  <ApplicationBase locale="en-US">
    <ApplicationContainer>
      <SessionProvider>
        <ConceptProvider>
          <DemoApplicationNavigation />
        </ConceptProvider>
      </SessionProvider>
    </ApplicationContainer>
  </ApplicationBase>
);

export default DemoApplication;
