import { createContext } from 'react';
import PropTypes from 'prop-types';

const LayoutActionsContext = createContext();

const actionShape = PropTypes.shape({
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  onSelect: PropTypes.func,
});

const contextShape = {
  startActions: PropTypes.arrayOf(actionShape),
  endActions: PropTypes.arrayOf(actionShape),
};

export default LayoutActionsContext;
export { contextShape };
