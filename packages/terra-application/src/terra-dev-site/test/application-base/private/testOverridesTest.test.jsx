import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { ThemeContext } from 'terra-application/theme';

const TestOverrideTest = () => {
  const applicationIntl = useIntl();
  const theme = useContext(ThemeContext);
  return (
    <div>
      {'locale: '}
      {applicationIntl.locale}
      <br />
      {'theme: '}
      {theme.name}
    </div>
  );
};

export default TestOverrideTest;
