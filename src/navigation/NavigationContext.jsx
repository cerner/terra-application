import { createContext } from 'react';

const NavigationContext = createContext({
  isActive: true,
  navigationIdentifier: undefined,
});

export default NavigationContext;

