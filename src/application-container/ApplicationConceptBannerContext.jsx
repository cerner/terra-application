import { createContext } from 'react';
import PropTypes from 'prop-types';

const ApplicationConceptBannerContext = createContext();

const contextShape = {
  /**
   * The React element representing the banner to render within the application's layouts.
   */
  layoutBanner: PropTypes.element,
  /**
   * The React element representing the banner to render within the application's modals.
   */
  modalBanner: PropTypes.element,
};

export default ApplicationConceptBannerContext;
export { contextShape };
