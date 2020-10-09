import { createContext } from 'react';

const PagePortalContext = createContext({
  nodeManager: undefined,
  isMain: false,
});

export default PagePortalContext;
