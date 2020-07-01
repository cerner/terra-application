import React from 'react';

import ApplicationContainer from 'terra-application/lib/application-container/ApplicationContainer';

import PatientConceptProvider from '../shared/PatientConceptProvider';
import ReviewPageContainer from '../page-containers/ReviewPageContainer';

const EmbeddedReviewAppContainer = () => (
  <PatientConceptProvider>
    <ApplicationContainer>
      <ReviewPageContainer />
    </ApplicationContainer>
  </PatientConceptProvider>
);

export default EmbeddedReviewAppContainer;
