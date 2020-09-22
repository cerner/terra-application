import React from 'react';

import ApplicationContainer from '../../../../application-container/ApplicationContainer';
import PatientConceptProvider from './patient-concept/PatientConceptProvider';
import DemoApplicationNavigationLayout from '../layouts/DemoApplicationNavigationLayout';

const DemoApplicationContainer = () => (
  <ApplicationContainer>
    <PatientConceptProvider>
      <DemoApplicationNavigationLayout />
    </PatientConceptProvider>
  </ApplicationContainer>
);

export default DemoApplicationContainer;
