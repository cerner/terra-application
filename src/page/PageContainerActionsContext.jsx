import { createContext } from 'react';
import PropTypes from 'prop-types';

const PageContainerActionsContext = createContext({
  startActions: undefined,
  endActions: undefined,
});

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

export default PageContainerActionsContext;
export { contextShape };
