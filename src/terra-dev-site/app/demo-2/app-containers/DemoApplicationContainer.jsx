import React from 'react';
// import DemographicsBanner from 'terra-demographics-banner';
// import Avatar from 'terra-avatar';

import ApplicationContainer from '../../../../application-container/ApplicationContainer';
import DemoApplicationLayout from './DemoApplicationLayout';
import PatientConceptProvider from './patient-concept/PatientConceptProvider';

const DemoApplicationContainer = () => (
  <ApplicationContainer>
    <PatientConceptProvider>
      <DemoApplicationLayout />
    </PatientConceptProvider>
  </ApplicationContainer>
);

export default DemoApplicationContainer;
