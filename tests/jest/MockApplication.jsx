import React from 'react';
import { IntlProvider } from 'react-intl';
import { mockIntl } from 'terra-enzyme-intl';
import ApplicationContainer from '../../src/application-container';
import { ApplicationIntlContext } from '../../src/application-intl';

/* eslint-disable react/prop-types */
const MockApplication = ({ children }) => (
  // eslint-disable-next-line compat/compat
  <IntlProvider locale="en" messages={new Proxy({}, { get: (_, property) => property })}>
    <ApplicationIntlContext.Provider value={mockIntl}>
      <ApplicationContainer>
        {children}
      </ApplicationContainer>
    </ApplicationIntlContext.Provider>
  </IntlProvider>
);
/* eslint-enable react/prop-types */

export default MockApplication;
