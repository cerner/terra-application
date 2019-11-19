import React from 'react';
import { mountWithIntl } from 'terra-enzyme-intl';
import ApplicationIntlContext from '../../../src/application-intl/ApplicationIntlContext';
import ApplicationIntlProvider from '../../../src/application-intl/ApplicationIntlProvider';

describe('ApplicationLoadingOverlayProvider', () => {
  describe('Snapshots', () => {
    it('should render an ApplicationIntlContext.Provider', () => {
      const wrapper = mountWithIntl((
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
