import React, { useState, useContext } from 'react';
import { useIntl } from 'react-intl';
import { ActiveBreakpointContext } from '@cerner/terra-application/lib/breakpoints';
import ApplicationLoadingOverlay from '@cerner/terra-application/lib/application-loading-overlay';
import ApplicationBase from '@cerner/terra-application/lib/application-base';
import UnsavedChangesPrompt from '@cerner/terra-application/lib/unsaved-changes-prompt';

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

  const unsavedChangesPromptExample = (
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
      {blockUnload ? <UnsavedChangesPrompt description="Testing ApplicationBase's unsaved changes prompt handling" /> : undefined}
    </>
  );

  return (
    <div>
      {activeBreakpointExample}
      {intlExample}
      {errorBoundaryExample}
      {loadingOverlayExample}
      {unsavedChangesPromptExample}
    </div>
  );
};

const ApplicationBaseExample = () => {
  const applicationIntl = useIntl();

  return (
    <ApplicationBase locale={applicationIntl.locale}>
      <ApplicationContentExample />
    </ApplicationBase>
  );
};

export default ApplicationBaseExample;