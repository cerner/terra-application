import React from 'react';
import Button from 'terra-button';

import PrimaryNavigationLayout from '../../../layouts/primary-navigation-layout/PrimaryNavigationLayout';
import SessionUserContext from '../../../session/SessionUserContext';
import SessionActionsContext from '../../../session/SessionActionsContext';
import ApplicationErrorBoundary from '../../../application-error-boundary';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../../../navigation-prompt';
import { ApplicationIntlContext } from '../../../application-intl';

const propTypes = {};

const userContextValue = {
  username: 'demouser',
  firstName: 'Demo',
  lastName: 'User',
};

const SessionContext = React.createContext();

const style = { padding: '0 1.5rem' };

const SessionProvider = ({ children }) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const checkpointRef = React.useRef();

  const [state, setState] = React.useState({
    isLoggedIn: true,
    isLoggedOut: false,
    isLocked: false,
  });

  const sessionActionsContextValue = React.useMemo(() => ({
    logOut: () => {
      checkpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
        setState({ isLoggedIn: false, isLoggedOut: true, isLocked: false });
      });
    },
    lock: () => {
      checkpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
        setState({ isLoggedIn: false, isLoggedOut: false, isLocked: true });
      });
    },
  }), [applicationIntl]);

  let content;

  if (state.isLoggedOut) {
    content = (
      <PrimaryNavigationLayout>
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
    content = (
      <SessionUserContext.Provider value={userContextValue}>
        <PrimaryNavigationLayout
          onSelectLogout={() => { setState({ isLoggedIn: false, isLocked: false, isLoggedOut: true }); }}
        >
          <main style={style}>
            <h1>Session Locked</h1>
            <br />
            <Button text="Unlock Session" onClick={() => { setState({ isLoggedIn: true, isLocked: false, isLoggedOut: false }); }} />
            <Button
              text="Log Out"
              onClick={sessionActionsContextValue.logOut}
            />
          </main>
        </PrimaryNavigationLayout>
      </SessionUserContext.Provider>
    );
  }

  if (state.isLoggedIn) {
    content = (
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
    <NavigationPromptCheckpoint ref={(ref) => { checkpointRef.current = ref; }}>
      {content || (
        <PrimaryNavigationLayout>
          <main style={style}>
            <h1>Not Logged In</h1>
            <br />
            <Button text="Log In" onClick={() => { setState({ isLoggedIn: true, isLocked: false, isLoggedOut: false }); }} />
          </main>
        </PrimaryNavigationLayout>
      )}
    </NavigationPromptCheckpoint>
  );
};

SessionProvider.propTypes = propTypes;

export default SessionProvider;
export { SessionContext };
