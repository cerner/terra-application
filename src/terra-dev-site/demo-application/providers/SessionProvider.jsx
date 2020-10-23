import React from 'react';
import Button from 'terra-button';
// import styles from './SessionProvider.module.scss';

import PrimaryNavigationLayout from '../../../layouts/primary-navigation-layout/PrimaryNavigationLayout';
import SessionUserContext from '../../../session/SessionUserContext';
import SessionActionsContext from '../../../session/SessionActionsContext';
import ApplicationErrorBoundary from '../../../application-error-boundary';

// const cx = classNames.bind(styles);

const propTypes = {};

const userContextValue = {
  username: 'demouser',
  firstName: 'Demo',
  lastName: 'User',
  features: {},
  capabilities: {},
};

const SessionContext = React.createContext();

const style = { padding: '0 1.5rem' };

const SessionProvider = ({ children }) => {
  const [state, setState] = React.useState({
    isLoggedIn: true,
    isLoggedOut: false,
    isLocked: false,
  });

  const sessionActionsContextValue = React.useMemo(() => ({
    logOut: () => { setState({ isLoggedIn: false, isLoggedOut: true, isLocked: false }); },
    lock: () => { setState({ isLoggedIn: false, isLoggedOut: false, isLocked: true }); },
  }), []);

  if (state.isLoggedOut) {
    return (
      <PrimaryNavigationLayout
        titleConfig={{ title: 'Demo Application' }}
      >
        <main style={style}>
          <h1>Logged Out</h1>
          <p>You have been logged out.</p>
          <br />
          <Button text="Reload" onClick={() => { window.location.reload(); }} />
        </main>
      </PrimaryNavigationLayout>
    );
  }

  if (state.isLocked) {
    return (
      <PrimaryNavigationLayout
        titleConfig={{ title: 'Demo Application' }}
        userConfig={{
          name: `${userContextValue.firstName} ${userContextValue.lastName}`,
          initials: `${userContextValue.firstName[0]?.toUpperCase()}${userContextValue.lastName[0]?.toUpperCase()}`,
        }}
        onSelectLogout={() => { setState({ isLoggedIn: false, isLocked: false, isLoggedOut: true }); }}
      >
        <main style={style}>
          <h1>Session Locked</h1>
          <br />
          <Button text="Unlock Session" onClick={() => { setState({ isLoggedIn: true, isLocked: false, isLoggedOut: false }); }} />
          <Button text="Log Out" onClick={() => { setState({ isLoggedIn: false, isLocked: false, isLoggedOut: true }); }} />
        </main>
      </PrimaryNavigationLayout>
    );
  }

  if (state.isLoggedIn) {
    return (
      <SessionUserContext.Provider value={userContextValue}>
        <SessionActionsContext.Provider value={sessionActionsContextValue}>
          <ApplicationErrorBoundary errorViewButtonAttrs={[{
            text: 'Reload',
            onClick: () => { window.location.reload(); },
          }, {
            text: 'Logout',
            onClick: () => { sessionActionsContextValue.logOut(); },
          }]}
          >
            {children}
          </ApplicationErrorBoundary>
        </SessionActionsContext.Provider>
      </SessionUserContext.Provider>
    );
  }

  return (
    <PrimaryNavigationLayout
      titleConfig={{ title: 'Demo Application' }}
    >
      <main style={style}>
        <h1>Not Logged In</h1>
        <br />
        <Button text="Log In" onClick={() => { setState({ isLoggedIn: true, isLocked: false, isLoggedOut: false }); }} />
      </main>
    </PrimaryNavigationLayout>
  );
};

SessionProvider.propTypes = propTypes;

export default SessionProvider;
export { SessionContext };
