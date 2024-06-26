import React, { useState, useContext } from 'react';
import { useIntl } from 'react-intl';
import { ThemeContext } from 'terra-application/theme';
import { ActiveBreakpointContext } from 'terra-application/breakpoints';
import ApplicationLoadingOverlay from 'terra-application/application-loading-overlay';
import ApplicationBase from 'terra-application/application-base';
import NavigationPrompt from 'terra-application/navigation-prompt';

const ApplicationContentExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [throwError, setThrowError] = useState(false);
  const [blockUnload, setBlockUnload] = useState(false);

  const activeBreakpoint = useContext(ActiveBreakpointContext);
  const applicationIntl = useIntl();

  if (throwError) {
    throw new Error("Testing ApplicationBase's error boundary...");
  }

  const activeBreakpointExample = (
    <p>
      Active Breakpoint:
      {' '}
      {activeBreakpoint}
    </p>
  );

  const intlExample = (
    <p>
      Active Locale:
      {' '}
      {applicationIntl.locale}
    </p>
  );

  const errorBoundaryExample = (
    <p>
      Render Error:
      {' '}
      <button type="button" onClick={() => { setThrowError(true); }}>Throw</button>
    </p>
  );

  const loadingOverlayExample = (
    <>
      <p>
        Show Loading Overlay (3 seconds):
        {' '}
        <button type="button" onClick={() => { setIsLoading(true); setTimeout(() => { setIsLoading(false); }, 3000); }}>Show</button>
      </p>
      <ApplicationLoadingOverlay isOpen={isLoading} message="Testing ApplicationBase's loading overlay" backgroundStyle="light" />
    </>
  );

  const navigationPromptExample = (
    <>
      <p>
        Prompt on window close:
        {' '}
        <input
          type="checkbox"
          name="prompt"
          onChange={() => {
            setBlockUnload(!blockUnload);
          }}
        />
      </p>
      {blockUnload ? <NavigationPrompt description="Testing ApplicationBase's navigation prompt handling" /> : undefined}
    </>
  );

  return (
    <div>
      {activeBreakpointExample}
      {intlExample}
      {errorBoundaryExample}
      {loadingOverlayExample}
      {navigationPromptExample}
    </div>
  );
};

const ApplicationBaseExample = () => {
  const applicationIntl = useIntl();
  const theme = React.useContext(ThemeContext);

  return (
    <ApplicationBase locale={applicationIntl.locale} themeName={theme.className}>
      <ApplicationContentExample />
    </ApplicationBase>
  );
};

export default ApplicationBaseExample;
