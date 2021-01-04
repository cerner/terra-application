import React, { useContext } from 'react';
import { useIntl } from 'react-intl';

const TestOverrideTest = () => {
  const applicationIntl = useIntl();
  return (
    <div>
      {'locale: '}
      {applicationIntl.locale}
    </div>
  );
};

export default TestOverrideTest;
