import React, { useState } from 'react';
import ApplicationErrorBoundary from '../../../../lib/application-error-boundary/ApplicationErrorBoundary';

const ErrorComponent = () => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('Error from Error Boundary Component');
  }

  return (
    <button id="error" type="button" onClick={() => { setThrowError(true); }}>Throw Error</button>
  );
};

const ErrorBoundaryOnErrorCallback = () => {
  const [callbackText, setCallbackText] = useState('');
  const handleOnError = (error) => setCallbackText(`Error Boundary onError callback fired ${error.toString()}`);

  return (
    <>
      <span>{callbackText || ''}</span>
      <ApplicationErrorBoundary onError={handleOnError}>
        <ErrorComponent />
      </ApplicationErrorBoundary>
    </>
  );
};

export default ErrorBoundaryOnErrorCallback;
