import React, { useContext } from 'react';

import DemographicsBanner from 'terra-demographics-banner';

import ApplicationBase from 'terra-application/lib/application-base';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';
import { ThemeContext } from 'terra-application/lib/theme';
import ApplicationConceptContext from 'terra-application/lib/application-concept/ApplicationConceptContext';

import ClinicalDemoNavigation from './ClinicalDemoNavigation';

window.TEST_APP_TIMEOUT = 3000;

const ClinicalDemoApp = () => {
  // For dev-site integration
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);

  return (
    <ApplicationBase locale={applicationIntl.locale} themeName={theme.className}>
      <ApplicationConceptContext.Provider
        value={{
          renderPageConceptView: () => (
            <div style={{ borderTop: '1px solid #002238' }}>
              <DemographicsBanner
                age="25 Years"
                dateOfBirth="May 9, 1993"
                gender="Male"
                personName="Johnathon Doe"
                preferredFirstName="John"
              />
            </div>
          ),
          renderModalConceptView: () => (
            <DemographicsBanner
              age="25 Years"
              dateOfBirth="May 9, 1993"
              gender="Male"
              personName="Johnathon (Modal) Doe"
              preferredFirstName="John"
              deceasedDate="June 16, 2020"
            />
          ),
        }}
      >
        <ClinicalDemoNavigation />
      </ApplicationConceptContext.Provider>
    </ApplicationBase>
  );
};

export default ClinicalDemoApp;
