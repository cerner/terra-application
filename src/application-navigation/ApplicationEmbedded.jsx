import React, {
  Suspense,
} from 'react';
import PropTypes from 'prop-types';
import ContentContainer from 'terra-content-container';

import ApplicationConceptContext from '../application-concept/ApplicationConceptContext';
import ApplicationErrorBoundary from '../application-error-boundary';
import ApplicationLoadingOverlay, { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';

const propTypes = {
  /**
   * A collection of child elements to render within the ApplicationEmbedded body.
   */
  children: PropTypes.node,
};

const ApplicationEmbedded = ({
  children,
}) => (
  <main tabIndex="-1" style={{ height: '100%', overflow: 'hidden' }}>
    <ApplicationConceptContext.Consumer>
      {(applicationConcept) => (
        <ContentContainer
          header={applicationConcept && applicationConcept.renderPageConceptView()}
          fill
        >
          <ApplicationLoadingOverlayProvider>
            <ApplicationErrorBoundary>
              <Suspense fallback={<ApplicationLoadingOverlay isOpen />}>
                {children}
              </Suspense>
            </ApplicationErrorBoundary>
          </ApplicationLoadingOverlayProvider>
        </ContentContainer>
      )}
    </ApplicationConceptContext.Consumer>
  </main>
);

ApplicationEmbedded.propTypes = propTypes;

export default ApplicationEmbedded;
