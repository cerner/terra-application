import React from 'react';
import uuidv4 from 'uuid/v4';
import NavigationContext from './NavigationContext';
import NavigationRegistrationContext from './NavigationRegistrationContext';

const useNavigationState = (navigationItems, initialState) => {
  const uuidRef = React.useRef(uuidv4());
  const navigation = React.useContext(NavigationContext);
  const navigationRegistration = React.useContext(NavigationRegistrationContext);

  const [state, setState] = React.useState(initialState || navigationItems[0]);

  React.useEffect(() => {
    navigationRegistration.registerNavigationEndpoints(uuidRef.current, navigationItems, setState, navigation.navigationIdentifier);
  }, [navigationRegistration, navigationItems, navigation]);

  React.useEffect(() => () => {
    navigationRegistration.unregisterNavigationEndpoints(uuidRef.current);
  }, [navigationRegistration]);

  return [state, setState];
};

export default useNavigationState;
