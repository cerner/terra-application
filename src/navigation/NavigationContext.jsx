import { createContext } from 'react';

const NavigationContext = createContext({
  isActive: true,
  navigationIdentifier: false,
});

export default NavigationContext;

