import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import NavigationItemContext from '../../navigation-item/NavigationItemContext';

import ActiveMainContext from '../ActiveMainContext';
import ActiveMainRegistrationContext from './ActiveMainRegistrationContext';

const propTypes = {
  children: PropTypes.node,
};

const ActiveMainProvider = ({ children }) => {
  const navigationItem = React.useContext(NavigationItemContext);
  const activeMainRegistration = React.useContext(ActiveMainRegistrationContext);
  const unregisterActiveMainRef = React.useRef();

  const [state, dispatch] = React.useReducer((currentState, action) => {
    if (action.type === 'register') {
      return {
        registrationId: action.registrationId,
        activeMain: {
          id: action.id,
          label: action.label,
          metaData: action.metaData,
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
  }, { registrationId: undefined, activeMain: undefined });

  React.useEffect(() => {
    if (!activeMainRegistration) {
      return;
    }

    // If an ancestor provider exists, we need to forward the active main info
    // if the provider exists in the active navigation branch. It is
    // otherwise unregistered, if necessary, as we do not want potentially stale
    // information living above this provider level.
    if (navigationItem.isActive) {
      unregisterActiveMainRef.current = activeMainRegistration.register(state.activeMain);
    } else if (unregisterActiveMainRef.current) {
      unregisterActiveMainRef.current();
      unregisterActiveMainRef.current = undefined;
    }
  }, [state.activeMain, navigationItem.isActive, activeMainRegistration]);

  React.useEffect(() => () => {
    if (unregisterActiveMainRef.current) {
      unregisterActiveMainRef.current();
      unregisterActiveMainRef.current = undefined;
    }
  }, []);

  const activeMainRegistrationContextValue = React.useMemo(() => ({
    register: (registrationData) => {
      if (!registrationData) {
        return undefined;
      }

      const { id, label, metaData } = registrationData;
      const registrationId = uuidv4();

      dispatch({
        type: 'register',
        registrationId,
        id,
        label,
        metaData,
      });

      return () => {
        dispatch({ type: 'unregister', registrationId });
      };
    },
  }), []);

  return (
    <ActiveMainRegistrationContext.Provider value={activeMainRegistrationContextValue}>
      <ActiveMainContext.Provider value={state.activeMain}>
        {children}
      </ActiveMainContext.Provider>
    </ActiveMainRegistrationContext.Provider>
  );
};

ActiveMainProvider.propTypes = propTypes;

export default ActiveMainProvider;
