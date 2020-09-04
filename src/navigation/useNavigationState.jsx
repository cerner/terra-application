import React from 'react';
import uuidv4 from 'uuid/v4';
import NavigationRegistrationContext from './NavigationRegistrationContext';

const useNavigationState = (navigationItems, initialState) => {
  const uuidRef = React.useRef(uuidv4());

  const [state, setState] = React.useState(initialState || navigationItems[0]);
  const navigationContextValue = React.useContext(NavigationRegistrationContext);

  React.useEffect(() => {
    navigationContextValue.registerNavigationEndpoints(uuidRef.current, navigationItems, setState);
  }, [navigationContextValue, navigationItems]);

  React.useEffect(() => () => {
    navigationContextValue.unregisterNavigationEndpoints(uuidRef.current);
  }, [navigationContextValue]);

  return [state, setState];
};

export default useNavigationState;
