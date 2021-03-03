import React from 'react';

import ActiveMainPageRegistrationContext from './ActiveMainPageRegistrationContext';
import NavigationItemContext from '../../../layouts/shared/NavigationItemContext';

const useActiveMainPageRegistry = (pageData = {}) => {
  const activeMainPageRegistration = React.useContext(ActiveMainPageRegistrationContext);
  const navigationItem = React.useContext(NavigationItemContext);
  const unregisterRef = React.useRef();

  React.useEffect(() => {
    // If the hook is disabled, or the hook is not part of the active navigation hierarchy,
    // any currently registrations are dismissed.
    if (!navigationItem.isActive || !pageData.pageKey) {
      if (unregisterRef.current) {
        unregisterRef.current();
      }
      return;
    }

    // Otherwise, the registration is updated with the changes that triggered the effect.
    unregisterRef.current = activeMainPageRegistration.registerActiveMainPage(pageData.pageKey, pageData.label, pageData.metaData, navigationItem.navigationKeys);
  }, [activeMainPageRegistration, pageData.pageKey, pageData.label, pageData.metaData, navigationItem.isActive, navigationItem.navigationKeys]);

  React.useEffect(() => () => {
    // If the hook ever unmounts completely, we ensure any present registrations are removed.
    // This is done in a separate hook to keep from performing a full removal->registration for small updates.
    if (unregisterRef.current) {
      unregisterRef.current();
    }
  }, []);
};

export default useActiveMainPageRegistry;
