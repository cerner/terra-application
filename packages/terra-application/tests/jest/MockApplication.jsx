import React from 'react';
import { IntlProvider } from 'react-intl';
import { mockIntl } from '@cerner/terra-enzyme-intl';
import { ApplicationIntlContext } from '../../src/application-intl';

/* eslint-disable react/prop-types */
const MockApplication = ({ children }) => (
  // eslint-disable-next-line compat/compat
  <IntlProvider locale="en" messages={new Proxy({}, { get: (_, property) => property })}>
    <ApplicationIntlContext.Provider value={mockIntl}>
      {children}
    </ApplicationIntlContext.Provider>
  </IntlProvider>
);
/* eslint-enable react/prop-types */

const withMockApplication = (Component) => {
  const WrappedComponent = (props) => (
    <MockApplication>
      <Component {...props} />
    </MockApplication>
  );

  return WrappedComponent;
};

export default MockApplication;
export { withMockApplication };
