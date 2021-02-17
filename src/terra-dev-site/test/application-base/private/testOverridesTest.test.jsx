import React from 'react';
import { ApplicationIntlContext } from '@cerner/terra-application/lib/application-intl';

const TestOverrideTest = () => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  return (
    <div>
      {'locale: '}
      {applicationIntl.locale}
    </div>
  );
};

export default TestOverrideTest;
