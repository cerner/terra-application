import React from 'react';

import ApplicationBase from '../../application-base';
import ApplicationContainer from '../../application-container/ApplicationContainer';

import DemoApplicationNavigationLayout from './generic-demo/layouts/DemoApplicationNavigationLayout';
import SimpleApplicationLayout from './generic-demo/layouts/SimpleApplicationLayout';
import HeadlessApplicationLayout from './generic-demo/layouts/HeadlessApplicationLayout';

import ConceptProvider from './generic-demo/providers/ConceptProvider';
import SessionProvider from './generic-demo/providers/SessionProvider';

window.TEST_APP_TIMEOUT = 3000;

document.body.setAttribute('tabindex', -1);

const DemoApplication = () => (
  <ApplicationBase locale="en-US">
    <ApplicationContainer>
      <SessionProvider>
        <ConceptProvider>
          <DemoApplicationNavigationLayout />
        </ConceptProvider>
      </SessionProvider>
    </ApplicationContainer>
  </ApplicationBase>
);

export default DemoApplication;
