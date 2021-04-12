import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';

import { Card } from '../../../../../page';

const propTypes = {
  pageTitle: PropTypes.string,
};

const ErrorHandlingCard = ({ pageTitle }) => {
  const [throwError, setThrowError] = React.useState(false);

  if (throwError) {
    throw new Error(`${pageTitle} threw error to test Page-level error handling`);
  }

  return (
    <Card label="Error Handling">
      <p>Errors thrown during the React render lifecycle will be caught by the error boundary rendered by the ApplicationContainer, if not otherwise intercepted.</p>
      <Button text="Throw Error" onClick={() => { setThrowError(true); }} />
    </Card>
  );
};

ErrorHandlingCard.propTypes = propTypes;

export default ErrorHandlingCard;
