import React, { useState } from 'react';

const propTypes = {};

const ErrorThrower = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error('Page threw an error to test the application\'s error handling');
  }

  return (
    <div>
      <h3>Error Handling</h3>
      <p>Press the button below to throw an exception that will be caught and handled by the framework</p>
      <button type="button" onClick={() => { setHasError(true); }}>Throw Error</button>
    </div>
  );
};

ErrorThrower.propTypes = propTypes;

export default ErrorThrower;
