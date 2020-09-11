import React from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from '../header-container/_HeaderContainer';

import ApplicationConceptContext from '../application-concept/ApplicationConceptContext';

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
        {children}
      </HeaderContainer>
    )}
  </ApplicationConceptContext.Consumer>
);

ApplicationContainer.propTypes = propTypes;

export default ApplicationContainer;
