import { createContext } from 'react';
import PropTypes from 'prop-types';

const ActiveMainPageContext = createContext();

const contextShape = {
  setActiveMainPage: PropTypes.func,
  pageKey: PropTypes.string,
  pageTitle: PropTypes.string,
  pageMetaData: PropTypes.string,
};

export default ActiveMainPageContext;
export { contextShape };
