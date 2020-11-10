import { createContext } from 'react';
import PropTypes from 'prop-types';

const ActiveMainPageContext = createContext();

const contextShape = {
  pageKey: PropTypes.string,
  pageTitle: PropTypes.string,
  pageMetaData: PropTypes.string,
};

export default ActiveMainPageContext;
export { contextShape };
