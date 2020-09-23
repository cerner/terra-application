import React from 'react';

import EmbeddedApplicationContainer from 'terra-application/lib/application-container/EmbeddedApplicationContainer';

import PatientConceptProvider from '../shared/PatientConceptProvider';
import ReviewPageContainer from '../page-containers/ReviewPageContainer';

const EmbeddedReviewAppContainer = () => (
  <EmbeddedApplicationContainer>
    <PatientConceptProvider>
      <ReviewPageContainer />
    </PatientConceptProvider>
  </EmbeddedApplicationContainer>
);

export default EmbeddedReviewAppContainer;
