import React from 'react';

import ApplicationBase from '../../application-base';
import ApplicationContainer from '../../application-container/ApplicationContainer';
import { dismissTransientPresentations } from '../../utils/transient-presentation';

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

const DemoApplication = () => (
  <ApplicationBase locale="en-US">
    <ApplicationContainer applicationName="Demo Application">
      <SessionProvider>
        <ConceptProvider>
          <DemoApplicationNavigationLayout />
        </ConceptProvider>
      </SessionProvider>
    </ApplicationContainer>
  </ApplicationBase>
);

export default DemoApplication;
