import React, {
  Suspense,
} from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from '../header-container/_HeaderContainer';

import ApplicationConceptContext from '../application-concept/ApplicationConceptContext';
import ApplicationErrorBoundary from '../application-error-boundary';
import ApplicationLoadingOverlay, { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';

const propTypes = {
  /**
   * A collection of child elements to render within the ApplicationContainer body.
   */
  children: PropTypes.node,
};

const ApplicationContainer = ({
  children,
}) => (
  <ApplicationConceptContext.Consumer>
    {(applicationConcept) => (
      <HeaderContainer
        header={applicationConcept && applicationConcept.renderPageConceptView()}
      >
        <ApplicationLoadingOverlayProvider>
          <ApplicationErrorBoundary>
            <Suspense fallback={<ApplicationLoadingOverlay isOpen />}>
              {children}
            </Suspense>
          </ApplicationErrorBoundary>
        </ApplicationLoadingOverlayProvider>
      </HeaderContainer>
    )}
  </ApplicationConceptContext.Consumer>
);

ApplicationContainer.propTypes = propTypes;

export default ApplicationContainer;
