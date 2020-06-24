import React, { useContext } from 'react';

import DemographicsBanner from 'terra-demographics-banner';

import ApplicationBase from 'terra-application/lib/application-base';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';
import { ThemeContext } from 'terra-application/lib/theme';
import ApplicationConceptContext from 'terra-application/lib/application-concept/ApplicationConceptContext';
import ApplicationEmbedded from 'terra-application/lib/application-navigation/ApplicationEmbedded';

import PatientConceptProvider from '../PatientConceptProvider';
import ReviewPageContainer from '../page-containers/ReviewPageContainer';

window.TEST_APP_TIMEOUT = 3000;

const EmbeddedReviewApp = () => {
  // For dev-site integration
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);

  return (
    <ApplicationBase locale={applicationIntl.locale} themeName={theme.className}>
      <PatientConceptProvider>
        <ApplicationEmbedded>
          <ReviewPageContainer />
        </ApplicationEmbedded>
      </PatientConceptProvider>
    </ApplicationBase>
  );
};

export default EmbeddedReviewApp;
