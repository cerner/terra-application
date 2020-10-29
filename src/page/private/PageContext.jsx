import { createContext } from 'react';

const PageContext = createContext({
  nodeManager: undefined,
  containerStartActions: undefined,
  containerEndActions: undefined,
});

export default PageContext;
