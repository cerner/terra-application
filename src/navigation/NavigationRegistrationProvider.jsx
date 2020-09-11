import React from 'react';

import NavigationRegistrationContext from './NavigationRegistrationContext';

const NavigationRegistrationProvider = ({ children }) => {
  const registeredNavigationEndpointsRef = React.useRef({});
  const navigationKeysRef = React.useRef({});

  const contextValue = React.useMemo(() => {
    const registerNavigationEndpoints = (id, navigationItems, stateCallback, navigationAncestor) => {
      registeredNavigationEndpointsRef.current[id] = {
        id, navigationItems, stateCallback, navigationAncestor,
      };

      navigationItems.forEach((item) => {
        navigationKeysRef.current[item] = {
          stateId: id, description: item.description, key: item, navigationAncestor,
        };
      });
    };

    const unregisterNavigationEndpoints = (id) => {
      const endpointToUnregister = registeredNavigationEndpointsRef.current[id];
      delete registeredNavigationEndpointsRef.current[id];

      endpointToUnregister.navigationItems.forEach((item) => {
        delete navigationKeysRef.current[item];
      });
    };

    const getNavigableEndpoints = () => (Object.keys(navigationKeysRef.current));
    const canNavigateTo = (endpointId) => !!navigationKeysRef.current[endpointId];
    const navigateTo = (endpointId) => {
      const { stateId, navigationAncestor } = navigationKeysRef.current[endpointId];

      if (navigationAncestor) {
        navigateTo(navigationAncestor);
      }

      registeredNavigationEndpointsRef.current[stateId].stateCallback(endpointId);
    };

    return {
      registerNavigationEndpoints,
      unregisterNavigationEndpoints,
      getNavigableEndpoints,
      canNavigateTo,
      navigateTo,
    };
  }, []);

  React.useEffect(() => {
    function handleNavigationEvent(event) {
      const navigationEndpoint = event.detail;

      if (contextValue.canNavigateTo(navigationEndpoint)) {
        contextValue.navigateTo(navigationEndpoint);
      }
    }

    window.addEventListener('terra-application.navigation.navigate-to', handleNavigationEvent);

    return () => {
      window.removeEventListener('terra-application.navigation.navigate-to', handleNavigationEvent);
    };
  });

  return (
    <NavigationRegistrationContext.Provider value={contextValue}>
      {children}
    </NavigationRegistrationContext.Provider>
  );
};

export default NavigationRegistrationProvider;
