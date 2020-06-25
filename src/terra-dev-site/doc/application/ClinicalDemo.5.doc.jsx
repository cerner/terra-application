
import React, { useContext } from 'react';

import ApplicationBase from 'terra-application/lib/application-base';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';
import { ThemeContext } from 'terra-application/lib/theme';
import ClinicalDemoAppContainer from './clinical-demo/app-containers/ClinicalDemoAppContainer';

window.TEST_APP_TIMEOUT = 3000;

document.body.setAttribute('tabindex', -1);

const ClinicalDemoApp = () => {
  // For dev-site integration
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);

  return (
    <ApplicationBase locale={applicationIntl.locale} themeName={theme.className}>
      <ClinicalDemoAppContainer />
    </ApplicationBase>
  );
};

export default ClinicalDemoApp;
