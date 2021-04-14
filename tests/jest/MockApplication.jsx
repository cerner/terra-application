import React from 'react';
import { IntlProvider } from 'react-intl';
import { mockIntl } from '@cerner/terra-enzyme-intl';
import { ActiveBreakpointContext } from '../../src/breakpoints';
import { ApplicationIntlContext } from '../../src/application-intl';

/* eslint-disable react/prop-types */
const MockApplication = ({ children, activeBreakpoint }) => (
  // eslint-disable-next-line compat/compat
  <IntlProvider
    locale="en"
    messages={new Proxy({}, {
      get: (_, property) => property,
      getOwnPropertyDescriptor: () => ({ configurable: true, enumerable: true }), // important for new checks in react-intl v5
    })}
  >
    <ApplicationIntlContext.Provider value={mockIntl}>
      <ActiveBreakpointContext.Provider value={activeBreakpoint}>
        {children}
      </ActiveBreakpointContext.Provider>
    </ApplicationIntlContext.Provider>
  </IntlProvider>
);

MockApplication.defaultProps = {
  activeBreakpoint: 'large',
};
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
