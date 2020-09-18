import React, { useContext } from 'react';

import { ApplicationIntlContext } from '../../application-intl';
import { ThemeContext } from '../../theme';
import ApplicationBase from '../../application-base';
import ApplicationContainer from '../../application-container/ApplicationContainer';

import DemoApplicationConceptLayout from './demo-2/app-containers/DemoApplicationConceptLayout';

window.TEST_APP_TIMEOUT = 3000;

document.body.setAttribute('tabindex', -1);

const DemoApplication = () => {
  // For dev-site integration
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);

  return (
    <ApplicationBase locale={applicationIntl?.locale || 'en'} themeName={theme?.className}>
      <ApplicationContainer>
        <DemoApplicationConceptLayout />
      </ApplicationContainer>
    </ApplicationBase>
  );
};

export default DemoApplication;
