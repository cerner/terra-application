import hasIntlData from 'intl-locales-supported';
import * as loadLocaleData from '../../../../src/application-base/private/loadLocaleData';
import loadIntl from '../../../../src/application-base/private/intlLoaders';
import { Logger } from '../../../../src/utils';

jest.mock('intl-locales-supported');
jest.mock('../../../../src/application-base/private/loadLocaleData');
jest.mock('../../../../src/utils/logger', () => ({
  warn: jest.fn(),
}));

const supportedIntlConstructors = [
  Intl.DateTimeFormat,
  Intl.NumberFormat,
  Intl.PluralRules,
];

describe('intlLoaders', () => {
  beforeAll(() => {
    hasIntlData.mockReturnValue(false);
  });

  afterAll(() => {
    window.Intl.mockReset();
  });

  describe('dev environment', () => {
    beforeEach(() => {
      Logger.warn.mockClear();
    });

    it('logs a warning when the regional locale is not provided and locale fallback is used', () => {
      loadLocaleData.default = jest.fn(locale => {
        if (locale === 'es-US') {
          return Promise.reject(Error('Locale data was not supplied for the es-US locale.'));
        }
        return Promise.resolve();
      });
      expect.assertions(4);
      return loadIntl('es-US', 'intl').then(() => {
        expect(Logger.warn).toBeCalledWith('Locale data was not supplied for the es-US locale. Using es data as the fallback locale data.');
        expect(loadLocaleData.default).toHaveBeenCalledTimes(2);
        expect(loadLocaleData.default).toHaveBeenNthCalledWith(2, 'es', 'intl');
        expect(loadLocaleData.default).not.toHaveBeenCalledWith('en', 'intl');
      });
    });

    it('logs a warning when the locale is not provided and en fallback is used', () => {
      loadLocaleData.default = jest.fn(locale => {
        if (locale === 'es') {
          return Promise.reject(Error('Locale data was not supplied for the es locale.'));
        }
        return Promise.resolve();
      });
      expect.assertions(3);
      return loadIntl('es', 'intl').then(() => {
        expect(Logger.warn).toBeCalledWith('Locale data was not supplied for the es locale. Using en data as the fallback locale data.');
        expect(loadLocaleData.default).toHaveBeenCalledTimes(2);
        expect(loadLocaleData.default).toHaveBeenNthCalledWith(2, 'en', 'intl');
      });
    });

    it('logs a warning when the regional locale and locale are not provided and en fallback is used', () => {
      loadLocaleData.default = jest.fn(locale => {
        if (locale === 'es-US') {
          return Promise.reject(Error('Locale data was not supplied for the es-US locale.'));
        }
        if (locale === 'es') {
          return Promise.reject(Error('Locale data was not supplied for the es locale.'));
        }
        return Promise.resolve();
      });
      expect.assertions(4);
      return loadIntl('es-US', 'intl').then(() => {
        expect(Logger.warn).toBeCalledWith('Locale data was not supplied for the es-US locale. Using es data as the fallback locale data.');
        expect(Logger.warn).toBeCalledWith('Locale data was not supplied for the es locale. Using en data as the fallback locale data.');
        expect(loadLocaleData.default).toHaveBeenCalledTimes(3);
        expect(loadLocaleData.default).toHaveBeenNthCalledWith(3, 'en', 'intl');
      });
    });

    it('throws an error when the regional locale and en fallback are not provided', () => {
      loadLocaleData.default = jest.fn(() => Promise.reject(Error('Test no locale data')));
      return expect(loadIntl('es-US', 'intl')).rejects.toThrow('Test no locale data');
    });

    it('throws an error when the locale and en fallback are not provided', () => {
      loadLocaleData.default = jest.fn(() => Promise.reject(Error('Test no locale data')));
      return expect(loadIntl('es', 'intl')).rejects.toThrow('Test no locale data');
    });
  });

  describe('production environment', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
      Logger.warn.mockClear();
    });

    afterEach(() => {
      delete process.env.NODE_ENV;
    });

    it('only fallbacks when the regional locale is not provided and locale fallback is used', () => {
      loadLocaleData.default = jest.fn(locale => {
        if (locale === 'es-US') {
          return Promise.reject(Error('Locale data was not supplied for the es-US locale.'));
        }
        return Promise.resolve();
      });
      expect.assertions(3);
      return loadIntl('es-US', 'intl').then(() => {
        expect(loadLocaleData.default).toHaveBeenCalledTimes(2);
        expect(loadLocaleData.default).toHaveBeenNthCalledWith(2, 'es', 'intl');
        expect(loadLocaleData.default).not.toHaveBeenCalledWith('en', 'intl');
      });
    });

    it('only fallbacks when the regional locale and locale are not provided and en fallback is used', () => {
      loadLocaleData.default = jest.fn(locale => {
        if (locale === 'es') {
          return Promise.reject(Error('Locale data was not supplied for the es locale.'));
        }
        return Promise.resolve();
      });
      expect.assertions(2);
      return loadIntl('es', 'intl').then(() => {
        expect(loadLocaleData.default).toHaveBeenCalledTimes(2);
        expect(loadLocaleData.default).toHaveBeenNthCalledWith(2, 'en', 'intl');
      });
    });

    it('only fallbacks when the locale is not provided and en fallback is used', () => {
      loadLocaleData.default = jest.fn(locale => {
        if (locale === 'es-US') {
          return Promise.reject(Error('Locale data was not supplied for the es-US locale.'));
        }
        if (locale === 'es') {
          return Promise.reject(Error('Locale data was not supplied for the es locale.'));
        }
        return Promise.resolve();
      });
      expect.assertions(2);
      return loadIntl('es-US', 'intl').then(() => {
        expect(loadLocaleData.default).toHaveBeenCalledTimes(3);
        expect(loadLocaleData.default).toHaveBeenNthCalledWith(3, 'en', 'intl');
      });
    });

    it('still throws an error when the locale and en fallback are not provided', () => {
      loadLocaleData.default = jest.fn(() => Promise.reject(Error('Test no locale data')));
      return expect(loadIntl('es-US', 'intl')).rejects.toThrow('Test no locale data');
    });

    it('still throws an error when the regional locale and en fallback are not provided', () => {
      loadLocaleData.default = jest.fn(() => Promise.reject(Error('Test no locale data')));
      return expect(loadIntl('es', 'intl')).rejects.toThrow('Test no locale data');
    });
  });
  describe('loads locale data as needed', () => {
    beforeEach(() => {
      hasIntlData.mockClear();
      loadLocaleData.default = jest.fn(() => Promise.resolve());
    });

    it('loads locale data', () => {
      hasIntlData.mockReturnValue(false);
      expect.assertions(3);
      return loadIntl('es', 'intl').then(() => {
        expect(loadLocaleData.default).toHaveBeenCalledWith('es', 'intl');
        expect(loadLocaleData.default).not.toHaveBeenCalledWith('en', 'intl');
        expect(hasIntlData).toBeCalledWith(['es'], supportedIntlConstructors);
      });
    });

    it('does not re-load locale data when it has already been loaded', () => {
      hasIntlData.mockReturnValue(true);
      expect.assertions(3);
      return loadIntl('es', 'intl').then(() => {
        expect(loadLocaleData.default).not.toHaveBeenCalledWith('es', 'intl');
        expect(loadLocaleData.default).not.toHaveBeenCalledWith('en', 'intl');
        expect(hasIntlData).toBeCalledWith(['es'], supportedIntlConstructors);
      });
    });

    it('does load new locale data', () => {
      hasIntlData.mockReturnValue(false);
      expect.assertions(3);
      return loadIntl('pt', 'intl').then(() => {
        expect(loadLocaleData.default).toHaveBeenCalledWith('pt', 'intl');
        expect(loadLocaleData.default).not.toHaveBeenCalledWith('en', 'intl');
        expect(hasIntlData).toBeCalledWith(['pt'], supportedIntlConstructors);
      });
    });

    it('does not re-load region locale data if regional local has already been loaded', () => {
      loadLocaleData.default = jest.fn(locale => {
        if (locale === 'es-US') {
          return Promise.reject(Error('Locale data not provided for es-US locale.'));
        }

        return Promise.resolve();
      });
      hasIntlData.mockReturnValue(true);
      expect.assertions(3);
      return loadIntl('es-US', 'intl').then(() => {
        expect(loadLocaleData.default).not.toHaveBeenCalledWith('es', 'intl');
        expect(loadLocaleData.default).not.toHaveBeenCalledWith('en', 'intl');
        expect(hasIntlData).toHaveBeenNthCalledWith(1, ['es-US'], supportedIntlConstructors);
      });
    });

    it('does not fallback locale data if fallback has already been loaded', () => {
      loadLocaleData.default = jest.fn(locale => {
        if (locale === 'es-US') {
          return Promise.reject(Error('Locale data not provided for es-US locale.'));
        }
        if (locale === 'es') {
          return Promise.reject(Error('Locale data not provided for es locale.'));
        }

        return Promise.resolve();
      });
      hasIntlData.mockReturnValue(false).mockReturnValueOnce(true);
      expect.assertions(2);
      return loadIntl('es-US', 'intl').then(() => {
        expect(loadLocaleData.default).not.toHaveBeenCalledWith('en', 'intl');
        expect(hasIntlData).toHaveBeenNthCalledWith(1, ['es-US'], supportedIntlConstructors);
      });
    });

    it('does not add supported Intl constructors if supportedLocalesOf property does not exist', () => {
      delete Intl.DateTimeFormat.supportedLocalesOf;
      delete Intl.NumberFormat.supportedLocalesOf;
      return loadIntl('en', 'intl').then(() => {
        expect(hasIntlData).toHaveBeenNthCalledWith(1, ['en'], []);
      });
    });
  });
});
