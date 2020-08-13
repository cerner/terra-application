import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';
import Avatar from 'terra-avatar';

import ApplicationConceptContext from '../../../../../application-concept/ApplicationConceptContext';

const PatientConceptProvider = ({ children }) => (
  <ApplicationConceptContext.Provider
    value={{
      renderPageConceptView: () => (
        <div style={{ borderTop: '1px solid #002238' }}>
          <DemographicsBanner
            photo={<Avatar alt="John Doe" initials="JD" />}
            applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
            age="25 Years"
            dateOfBirth="May 9, 1993"
            gender="Male"
            identifiers={{ MRN: 12343, REA: '3JSDA' }}
            personName="John Doe"
            preferredFirstName="Page"
          />
        </div>
      ),
      renderModalConceptView: () => (
        <DemographicsBanner
          photo={<Avatar alt="John Doe" initials="JD" />}
          age="25 Years"
          dateOfBirth="May 9, 1993"
          gender="Male"
          identifiers={{ MRN: 12343, REA: '3JSDA' }}
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
