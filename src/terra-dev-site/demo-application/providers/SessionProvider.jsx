import React from 'react';
import Button from 'terra-button';

import PrimaryNavigationLayout from '../../../layouts/primary-navigation-layout/PrimaryNavigationLayout';
import SessionUserContext from '../../../session/SessionUserContext';
import SessionActionsContext from '../../../session/SessionActionsContext';
import { ApplicationContainerErrorBoundary } from '../../../application-container';
import { UnsavedChangesPromptCheckpoint, getUnsavedChangesPromptOptions } from '../../../unsaved-changes-prompt';
import { ApplicationIntlContext } from '../../../application-intl';
import WindowManager from '../../../utils/window-manager/window-manager';

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
    logout: () => {
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
              onClick={sessionActionsContextValue.logout}
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
          <ApplicationContainerErrorBoundary errorViewButtonAttrs={[{
            text: 'Reload',
            onClick: () => { WindowManager.forceLocationReload(); },
          }, {
            text: 'Logout',
            onClick: () => { sessionActionsContextValue.logout(); },
          }]}
          >
            {children}
          </ApplicationContainerErrorBoundary>
        </SessionActionsContext.Provider>
      </SessionUserContext.Provider>
    );
  }

  return (
    <UnsavedChangesPromptCheckpoint ref={(ref) => { checkpointRef.current = ref; }}>
      {content || (
        <PrimaryNavigationLayout>
          <main style={style}>
            <h1>Not Logged In</h1>
            <br />
            <Button text="Log In" onClick={() => { setState({ isLoggedIn: true, isLocked: false, isLoggedOut: false }); }} />
          </main>
        </PrimaryNavigationLayout>
      )}
    </UnsavedChangesPromptCheckpoint>
  );
};

SessionProvider.propTypes = propTypes;

export default SessionProvider;
export { SessionContext };
