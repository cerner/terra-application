import React, { useState } from 'react';
import ApplicationBase from '../../../application-base';
import ApplicationErrorBoundary from '../../../../lib/application-error-boundary/ApplicationErrorBoundary';

const ErrorComponent = () => {
  const [throwError, setThrowError] = useState(false);
  const [throwDefaultError, setThrowDefaultError] = useState(false);

  if (throwError) {
    throw new Error('ouch');
  }

  if (throwDefaultError) {
    throw new Error();
  }

  return (
    <>
      <button type="button" onClick={() => { setThrowError(true); }}>Throw Error</button>
      <button type="button" id="defaultMessage" onClick={() => { setThrowDefaultError(true); }}>Throw Default Error</button>
    </>
  );
};

const ErrorBoundaryTest = () => (
  <ApplicationBase>
    <ApplicationErrorBoundary>
      <ErrorComponent />
    </ApplicationErrorBoundary>
  </ApplicationBase>
);

export default ErrorBoundaryTest;
