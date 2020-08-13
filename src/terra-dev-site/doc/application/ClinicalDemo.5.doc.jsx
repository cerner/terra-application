
import React, { useContext } from 'react';

import { ApplicationIntlContext } from '../../../application-intl';
import { ThemeContext } from '../../../theme';
import ApplicationBase from '../../../application-base';
import ClinicalDemoAppContainer from './demo/app-containers/ClinicalDemoAppContainer';

window.TEST_APP_TIMEOUT = 3000;

document.body.setAttribute('tabindex', -1);

const ClinicalDemoApp = () => {
  // For dev-site integration
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);

  return (
    <ApplicationBase locale={applicationIntl?.locale || 'en'} themeName={theme?.className}>
      <ClinicalDemoAppContainer />
    </ApplicationBase>
  );
};

export default ClinicalDemoApp;
