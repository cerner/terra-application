import { createContext } from 'react';

const PageContainerContext = createContext({
  containerStartActions: [],
  containerEndActions: [],
  isMainPage: false,
});

export default PageContainerContext;
