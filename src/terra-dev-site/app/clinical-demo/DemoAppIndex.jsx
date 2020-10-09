import React, { useContext } from 'react';

import ApplicationBase from 'terra-application/lib/application-base';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';
import ModalManager from 'terra-application/lib/modal-manager';
import { ThemeContext } from 'terra-application/lib/theme';

import DemoAppNavigation from './DemoAppNavigation';

window.TEST_APP_TIMEOUT = 1000;

const DemoAppIndex = () => {
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);
  return (
    <ApplicationBase locale={applicationIntl.locale} themeName={theme.className}>
      <ModalManager>
        <DemoAppNavigation />
      </ModalManager>
    </ApplicationBase>
  );
};

export default DemoAppIndex;
