import React, { useContext } from 'react';
import { ApplicationIntlContext } from '../../../application-intl';

const FullStackTestOverrideTest = () => {
  const applicationIntl = useContext(ApplicationIntlContext);
  return (
    <div id="full-stack-test-example">
      {applicationIntl.locale}
    </div>
  );
};

export default FullStackTestOverrideTest;