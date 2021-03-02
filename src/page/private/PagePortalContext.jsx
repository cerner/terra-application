import { createContext } from 'react';
import PropTypes from 'prop-types';

const PagePortalContext = createContext(undefined);

const contextShape = PropTypes.shape({
  getPortalElement: PropTypes.func,
});

export default PagePortalContext;
export { contextShape };
