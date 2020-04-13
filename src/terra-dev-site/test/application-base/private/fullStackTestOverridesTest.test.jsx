import React, { useContext } from 'react';
import { ApplicationIntlContext } from '../../../../application-intl';

const FullStackTestOverrideTest = () => {
  const applicationIntl = useContext(ApplicationIntlContext);
  return (
    <div id="full-stack-test-example" style={{ height: '200px', width: '200px' }}>
      {'locale: '}
      {applicationIntl.locale}
    </div>
  );
};

export default FullStackTestOverrideTest;
