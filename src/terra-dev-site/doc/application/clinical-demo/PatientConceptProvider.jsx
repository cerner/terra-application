import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';
import ApplicationConceptContext from '../../../../application-concept/ApplicationConceptContext';

const PatientConceptProvider = ({ children }) => (
  <ApplicationConceptContext.Provider
    value={{
      renderPageConceptView: () => (
        <div style={{ borderTop: '1px solid #002238' }}>
          <DemographicsBanner
            age="25 Years"
            dateOfBirth="May 9, 1993"
            gender="Male"
            personName="John Doe"
            preferredFirstName="Clinical App"
          />
        </div>
      ),
      renderModalConceptView: () => (
        <DemographicsBanner
          age="25 Years"
          dateOfBirth="May 9, 1993"
          gender="Male"
          personName="John Doe"
          preferredFirstName="Modal"
        />
      ),
    }}
  >
    {children}
  </ApplicationConceptContext.Provider>
);

export default PatientConceptProvider;
