import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import ActiveMainPageContext from './ActiveMainPageContext';
import ActiveMainPageRegistrationContext from './ActiveMainPageRegistrationContext';

const propTypes = {
  children: PropTypes.node,
};

const ActiveMainPageProvider = ({ children }) => {
  // useReducer is used here to allow us to more cleanly bail out of state
  // updates should the same page be registered multiple times.
  const [state, dispatch] = React.useReducer((currentState, action) => {
    if (action.type === 'register') {
      return {
        registrationId: action.registrationId,
        activeMainPage: {
          parentNavigationKeys: action.parentNavigationKeys,
          pageKey: action.pageKey,
          pageLabel: action.pageLabel,
          pageMetaData: action.pageMetaData,
        },
      };
    }

    if (action.type === 'unregister') {
      if (currentState.registrationId === action.registrationId) {
        return {
          registrationId: undefined,
          activeMainPage: undefined,
        };
      }
    }

    return currentState;
  }, { registrationId: undefined, activeMainPage: undefined });

  const activeMainPageRegistrationContextValue = React.useMemo(() => ({
    registerActiveMainPage: (pageKey, pageLabel, pageMetaData, parentNavigationKeys) => {
      const registrationId = uuidv4();

      dispatch({
        type: 'register',
        registrationId,
        pageKey,
        pageLabel,
        pageMetaData,
        parentNavigationKeys,
      });

      return () => {
        dispatch({ type: 'unregister', registrationId });
      };
    },
  }), []);

  return (
    <ActiveMainPageRegistrationContext.Provider value={activeMainPageRegistrationContextValue}>
      <ActiveMainPageContext.Provider value={state.activeMainPage}>
        {children}
      </ActiveMainPageContext.Provider>
    </ActiveMainPageRegistrationContext.Provider>
  );
};

ActiveMainPageProvider.propTypes = propTypes;

export default ActiveMainPageProvider;
