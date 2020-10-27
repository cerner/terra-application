import { createContext } from 'react';
import PropTypes from 'prop-types';

const PageActionsContext = createContext();

const contextShape = {
  startActions: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  endActions: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default PageActionsContext;
export { contextShape };
