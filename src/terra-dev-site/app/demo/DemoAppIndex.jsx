import React, { useContext } from 'react';

import ApplicationBase from '@cerner/terra-application/lib/application-base';
import { ApplicationIntlContext } from '@cerner/terra-application/lib/application-intl';
import ModalManager from '@cerner/terra-application/lib/modal-manager';
import { ThemeContext } from '@cerner/terra-application/lib/theme';

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
