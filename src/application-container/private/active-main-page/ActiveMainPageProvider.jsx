import React from 'react';
import PropTypes from 'prop-types';

import ActiveMainPageContext from './ActiveMainPageContext';
import ActiveMainPageRegistrationContext from './ActiveMainPageRegistrationContext';

const propTypes = {
  children: PropTypes.node,
};

const ActiveMainPageProvider = ({ children }) => {
  /**
   * useReducer is used here to allow us to more cleanly bail out of state updates should the same page be registered multiple times.
   */
  const [activeMainPage, setActiveMainPage] = React.useReducer((state, action) => {
    if (action.pageKey === state.pageKey && action.pageDescription === state.pageDescription && action.pageMetaData === state.pageMetaData && action.parentNavigationKeys === state.parentNavigationKeys) {
      return state;
    }

    return {
      parentNavigationKeys: action.parentNavigationKeys,
      pageKey: action.pageKey,
      pageDescription: action.pageDescription,
      pageMetaData: action.pageMetaData,
    };
  }, {});

  const activeMainPageRegistrationContextValue = React.useMemo(() => ({
    setActiveMainPage: (pageKey, pageDescription, pageMetaData, parentNavigationKeys) => {
      setActiveMainPage({
        pageKey, pageDescription, pageMetaData, parentNavigationKeys,
      });
    },
  }), []);

  return (
    <ActiveMainPageRegistrationContext.Provider value={activeMainPageRegistrationContextValue}>
      <ActiveMainPageContext.Provider value={activeMainPage}>
        {children}
      </ActiveMainPageContext.Provider>
    </ActiveMainPageRegistrationContext.Provider>
  );
};

ActiveMainPageProvider.propTypes = propTypes;

export default ActiveMainPageProvider;
