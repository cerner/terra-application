import React, { useContext } from 'react';

import ApplicationBase from 'terra-application/lib/application-base';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';
import { ThemeContext } from 'terra-application/lib/theme';

import ClinicalDemoNavigation from './ClinicalDemoNavigation';
import PatientConceptProvider from '../PatientConceptProvider';

window.TEST_APP_TIMEOUT = 3000;

const ClinicalDemoApp = () => {
  // For dev-site integration
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);

  return (
    <ApplicationBase locale={applicationIntl.locale} themeName={theme.className}>
      <PatientConceptProvider>
        <ClinicalDemoNavigation />
      </PatientConceptProvider>
    </ApplicationBase>
  );
};

export default ClinicalDemoApp;
