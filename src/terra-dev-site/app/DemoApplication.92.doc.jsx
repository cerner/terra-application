import React from 'react';

import ApplicationBase from '../../application-base';
import ApplicationContainer from '../../application-container/ApplicationContainer';

import DemoApplicationNavigation from './demo-2/layouts/DemoApplicationNavigationLayout';
import PatientConceptProvider from './demo-2/app-containers/patient-concept/PatientConceptProvider';

window.TEST_APP_TIMEOUT = 3000;

document.body.setAttribute('tabindex', -1);

const DemoApplication = () => (
  <ApplicationBase locale="en-US">
    <ApplicationContainer>
      <PatientConceptProvider>
        <DemoApplicationNavigation />
      </PatientConceptProvider>
    </ApplicationContainer>
  </ApplicationBase>
);

export default DemoApplication;
