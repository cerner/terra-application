import React, { useContext } from 'react';

import ApplicationBase from 'terra-application/lib/application-base';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';

import DemoAppNavigation from './DemoAppNavigation';

window.TEST_APP_TIMEOUT = 1000;

const DemoAppIndex = () => {
  const applicationIntl = useContext(ApplicationIntlContext);
  debugger;
  return (
    <ApplicationBase
      locale={applicationIntl.locale || 'en-US'}
    >
      <DemoAppNavigation />
    </ApplicationBase>
  );
};

export default DemoAppIndex;
