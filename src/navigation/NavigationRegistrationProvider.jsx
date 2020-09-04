import React from 'react';

import NavigationRegistrationContext from './NavigationRegistrationContext';

const NavigationRegistrationProvider = ({ children }) => {
  const registeredNavigationEndpoints = React.useRef({});
  const navigationKeysRef = React.useRef({});

  const contextValue = React.useMemo(() => {
    const registerNavigationEndpoints = (id, navigationItems, stateCallback) => {
      registeredNavigationEndpoints.current[id] = {
        id, navigationItems, stateCallback,
      };

      navigationItems.forEach((item) => {
        navigationKeysRef.current[item.key] = { stateId: id, description: item.description, key: item.key };
      });
    };

    const unregisterNavigationEndpoints = (id) => {
      delete registeredNavigationEndpoints.current[id];
    };

    const getNavigableEndpoints = () => (Object.keys(navigationKeysRef.current));
    const canNavigateTo = (endpointId) => !!navigationKeysRef.current[endpointId];
    const navigateTo = (endpointId) => {
      const { stateId } = navigationKeysRef.current[endpointId];

      registeredNavigationEndpoints[stateId].stateCallback(endpointId);
    };

    return {
      registerNavigationEndpoints,
      unregisterNavigationEndpoints,
      getNavigableEndpoints,
      canNavigateTo,
      navigateTo,
    };
  }, []);

  return (
    <NavigationRegistrationContext.Provider value={contextValue}>
      {children}
    </NavigationRegistrationContext.Provider>
  );
};

export default NavigationRegistrationProvider;
