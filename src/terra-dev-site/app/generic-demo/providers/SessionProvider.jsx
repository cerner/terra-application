import React from 'react';
// import classNames from 'classnames/bind';
import Button from 'terra-button';
// import styles from './SessionProvider.module.scss';

import PrimaryNavigationLayout from '../../../../application-layouts/PrimaryNavigationLayout';

// const cx = classNames.bind(styles);

const propTypes = {};

const userConfig = {
  name: 'Demo User',
  initials: 'DU',
};

const SessionContext = React.createContext();

const style = { padding: '0 1.5rem' };

const SessionProvider = ({ children }) => {
  const [state, setState] = React.useState({
    isLoggedIn: true,
    isLoggedOut: false,
    isLocked: false,
  });

  const sessionContextValue = React.useMemo(() => ({
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
        </main>
      </PrimaryNavigationLayout>
    );
  }

  if (state.isLocked) {
    return (
      <PrimaryNavigationLayout
        titleConfig={{ title: 'Demo Application' }}
        userConfig={userConfig}
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
      <SessionContext.Provider value={sessionContextValue}>
        {children}
      </SessionContext.Provider>
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
