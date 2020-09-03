import React from 'react';

import EmbeddedApplicationContainer from '../../../../../application-container/EmbeddedApplicationContainer';

import PatientConceptProvider from '../shared/PatientConceptProvider';
import DocumentPageContainer from '../page-containers/DocumentPageContainer';

const EmbeddedDocumentAppContainer = () => (
  <PatientConceptProvider>
    <EmbeddedApplicationContainer>
      <DocumentPageContainer />
    </EmbeddedApplicationContainer>
  </PatientConceptProvider>
);

export default EmbeddedDocumentAppContainer;
