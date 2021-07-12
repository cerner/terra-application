import React, { useContext } from 'react';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';

const TestOverrideTest = () => {
  const applicationIntl = useContext(ApplicationIntlContext);
  return (
    <div>
      {'locale: '}
      {applicationIntl.locale}
    </div>
  );
};

export default TestOverrideTest;
