import React from 'react';
import { mountWithIntl } from 'terra-enzyme-intl';
import ApplicationIntlContext from '../../../src/application-intl/ApplicationIntlContext';
import ApplicationIntlProvider from '../../../src/application-intl/ApplicationIntlProvider';

describe('ApplicationIntlProvider', () => {
  describe('Snapshots', () => {
    it('should render an ApplicationIntlContext.Provider', () => {
      const wrapper = enzymeIntl.mountWithIntl((
        <ApplicationIntlProvider>
          <ApplicationIntlContext.Consumer>
            {(intl) => {
              expect(intl).toBeDefined();

              return <div>Test Component</div>;
            }}
          </ApplicationIntlContext.Consumer>
        </ApplicationIntlProvider>
      ));

      expect(wrapper).toMatchSnapshot();
    });
  });
});
