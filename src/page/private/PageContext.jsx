import { createContext } from 'react';

const PageContext = createContext({
  containerStartActions: [],
  containerEndActions: [],
  isMainPage: false,
});

export default PageContext;
