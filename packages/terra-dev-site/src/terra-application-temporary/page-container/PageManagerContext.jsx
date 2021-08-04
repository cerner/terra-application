import React from 'react';
import PropTypes from 'prop-types';

/**
 * The PageManagerContext defines an interface between PageContainers and Pages
 * that allows Pages to render within a PageContainer.
 *
 * The usePagePortal hook is provided to facilitate usage of the PageManagerContext.
 * Direct usage of the PageManagerContext is not recommended.
 */
const PageManagerContext = React.createContext();

const contextShape = PropTypes.shape({
  /**
   * Function that registers the provided Page information with the nearest
   * ancestor PageContainer. Returns a function to undo the registration.
   */
  registerPage: PropTypes.func,
});

export default PageManagerContext;
export { contextShape };
