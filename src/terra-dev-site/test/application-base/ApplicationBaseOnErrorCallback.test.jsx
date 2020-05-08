import React, { useState } from 'react';
import ApplicationBase from '../../../application-base';

const ErrorComponent = () => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('Error from Application Base Error Boundary');
  }

  return (
    <button id="error" type="button" onClick={() => { setThrowError(true); }}>Throw Error</button>
  );
};

const ApplicationBaseOnErrorCallbackTest = () => {
  const [callbackText, setCallbackText] = useState('');
  const handleOnError = (error) => setCallbackText(`Application Base onError callback fired ${error.toString()}`);

  return (
    <>
      <span>{callbackText || ''}</span>
      <ApplicationBase onError={handleOnError}>
        <ErrorComponent />
      </ApplicationBase>
    </>
  );
};

export default ApplicationBaseOnErrorCallbackTest;
