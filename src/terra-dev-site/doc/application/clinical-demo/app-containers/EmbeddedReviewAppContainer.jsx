import React from 'react';

import ApplicationContainer from 'terra-application/lib/application-container/ApplicationContainer';

import PatientConceptProvider from '../PatientConceptProvider';
import ReviewPageContainer from '../page-containers/ReviewPageContainer';

const EmbeddedReviewApp = () => (
  <PatientConceptProvider>
    <ApplicationContainer>
      <ReviewPageContainer />
    </ApplicationContainer>
  </PatientConceptProvider>
);

export default EmbeddedReviewApp;
