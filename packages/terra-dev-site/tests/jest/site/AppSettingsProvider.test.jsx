import React from 'react';
import AppSettingsProvider from '../../../src/site/_AppSettingsProvider';

describe('ThemeContextProvider', () => {
  describe('Snapshots', () => {
    it('should render with no config', () => {
      const config = {};
      const wrapper = enzyme.shallow((
        <AppSettingsProvider settingsConfig={config}>
          <div />
        </AppSettingsProvider>
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with default config specified', () => {
      const config = {
        defaultLocale: 'es',
        defaultTheme: 'my theme',
        defaultDensity: 'compact',
        defaultDirection: 'rtl',
      };
      const wrapper = enzyme.shallow((
        <AppSettingsProvider settingsConfig={config}>
          <div />
        </AppSettingsProvider>
      ));

      expect(wrapper).toMatchSnapshot();
    });
  });
});
