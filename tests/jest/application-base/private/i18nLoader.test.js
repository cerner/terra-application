/* eslint-disable no-console, import/no-unresolved */
import * as relativetimeformatPolyfill from '@formatjs/intl-relativetimeformat/should-polyfill';
import i18nLoader from '../../../../src/application-base/private/i18nLoader';
import defaultLoadIntl from '../../../../src/application-base/private/intlLoaders';
import loadTranslations from '../../../../src/application-base/private/translationsLoaders';

jest.mock('../../../../src/application-base/private/intlLoaders');
jest.mock('../../../../src/application-base/private/translationsLoaders');
jest.mock('@formatjs/intl-relativetimeformat/should-polyfill');

global.console.warn = jest.fn();

describe('i18nLoader', () => {
  beforeEach(() => {
    console.warn.mockClear();
  });

  describe('when intl is provided by browser', () => {
    beforeAll(() => {
      defaultLoadIntl.mockClear();
      global.Intl = { DateTimeFormat: jest.fn(), NumberFormat: jest.fn(), PluralRules: jest.fn() };
      relativetimeformatPolyfill.shouldPolyfill = jest.fn().mockReturnValue(false);
      i18nLoader('en');
    });
    afterAll(() => { global.Intl = undefined; });

    it('does not add the intl polyfill ', () => {
      expect(global.IntlPolyfill).not.toBeDefined();
    });

    it('does not load intl data', () => {
      expect(defaultLoadIntl).not.toHaveBeenCalled();
    });
  });

  describe('when Intl.RelativeTimeFormat is not defined', () => {
    beforeAll(() => {
      defaultLoadIntl.mockClear();
      loadTranslations.mockClear();
      global.Intl = { DateTimeFormat: jest.fn(), NumberFormat: jest.fn(), PluralRules: jest.fn() };
      relativetimeformatPolyfill.shouldPolyfill = jest.fn().mockReturnValue(true);
    });
    afterAll(() => { global.Intl = undefined; });

    it('loads en locale', () => {
      i18nLoader('en');
    });

    it('adds the intl polyfill', () => {
      expect(global.Intl).toBeDefined();
    });

    it('loads the locale data ', () => {
      expect(defaultLoadIntl).toHaveBeenNthCalledWith(1, 'en', 'relativetimeformat');
    });

    it('loads translations', () => {
      expect(loadTranslations).toHaveBeenNthCalledWith(1, 'en');
    });

    it('loads es locale', () => {
      i18nLoader('es');
    });

    it('loads the new locale data on sequential load ', () => {
      expect(defaultLoadIntl).toHaveBeenNthCalledWith(2, 'es', 'relativetimeformat');
    });

    it('loads the new translation data on sequential load ', () => {
      expect(loadTranslations).toHaveBeenNthCalledWith(2, 'es');
    });
  });

  describe('when intl is not defined', () => {
    beforeAll(() => {
      defaultLoadIntl.mockClear();
      loadTranslations.mockClear();
      relativetimeformatPolyfill.shouldPolyfill = jest.fn().mockReturnValue(false);
      global.Intl = undefined;
    });
    afterAll(() => { global.Intl = undefined; });

    it('loads en locale', () => {
      i18nLoader('en');
    });

    it('adds the intl polyfill', () => {
      expect(global.Intl).toBeDefined();
      expect(global.IntlPolyfill).toBeDefined();
    });

    it('loads the locale data ', () => {
      expect(defaultLoadIntl).toHaveBeenNthCalledWith(1, 'en', 'intl');
    });

    it('loads translations', () => {
      expect(loadTranslations).toHaveBeenNthCalledWith(1, 'en');
    });

    it('loads es locale', () => {
      i18nLoader('es');
    });

    it('loads the new locale data on sequential load ', () => {
      expect(defaultLoadIntl).toHaveBeenNthCalledWith(2, 'es', 'intl');
    });

    it('loads the new translation data on sequential load ', () => {
      expect(loadTranslations).toHaveBeenNthCalledWith(2, 'es');
    });
  });

  describe('when Intl.DataTimeFormat is not defined', () => {
    beforeAll(() => {
      defaultLoadIntl.mockClear();
      loadTranslations.mockClear();
      global.Intl = { DateTimeFormat: undefined };
    });
    afterAll(() => { global.Intl = undefined; });

    it('loads en locale', () => {
      i18nLoader('en');
    });

    it('adds the intl polyfill', () => {
      expect(global.Intl).toBeDefined();
      expect(global.IntlPolyfill).toBeDefined();
    });

    it('loads the locale data ', () => {
      expect(defaultLoadIntl).toHaveBeenNthCalledWith(1, 'en', 'intl');
    });

    it('loads translations', () => {
      expect(loadTranslations).toHaveBeenNthCalledWith(1, 'en');
    });

    it('loads es locale', () => {
      i18nLoader('es');
    });

    it('loads the new locale data on sequential load ', () => {
      expect(defaultLoadIntl).toHaveBeenNthCalledWith(2, 'es', 'intl');
    });

    it('loads the new translation data on sequential load ', () => {
      expect(loadTranslations).toHaveBeenNthCalledWith(2, 'es');
    });
  });

  describe('when Intl.NumberFormat is not defined', () => {
    beforeAll(() => {
      defaultLoadIntl.mockClear();
      loadTranslations.mockClear();
      global.Intl = { DateTimeFormat: jest.fn() };
    });
    afterAll(() => { global.Intl = undefined; });

    it('loads en locale', () => {
      i18nLoader('en');
    });

    it('adds the intl polyfill', () => {
      expect(global.Intl).toBeDefined();
      expect(global.IntlPolyfill).toBeDefined();
    });

    it('loads the locale data ', () => {
      expect(defaultLoadIntl).toHaveBeenNthCalledWith(1, 'en', 'intl');
    });

    it('loads translations', () => {
      expect(loadTranslations).toHaveBeenNthCalledWith(1, 'en');
    });

    it('loads es locale', () => {
      i18nLoader('es');
    });

    it('loads the new locale data on sequential load ', () => {
      expect(defaultLoadIntl).toHaveBeenNthCalledWith(2, 'es', 'intl');
    });

    it('loads the new translation data on sequential load ', () => {
      expect(loadTranslations).toHaveBeenNthCalledWith(2, 'es');
    });
  });

  describe('when Intl.PluralRules is not defined', () => {
    beforeAll(() => {
      defaultLoadIntl.mockClear();
      loadTranslations.mockClear();
      global.Intl = { DateTimeFormat: jest.fn(), NumberFormat: jest.fn() };
    });
    afterAll(() => { global.Intl = undefined; });

    it('loads en locale', () => {
      i18nLoader('en');
    });

    it('adds the intl polyfill', () => {
      expect(global.Intl).toBeDefined();
      expect(global.IntlPolyfill).toBeDefined();
    });

    it('loads the locale data ', () => {
      expect(defaultLoadIntl).toHaveBeenNthCalledWith(1, 'en', 'intl');
    });

    it('loads translations', () => {
      expect(loadTranslations).toHaveBeenNthCalledWith(1, 'en');
    });

    it('loads es locale', () => {
      i18nLoader('es');
    });

    it('loads the new locale data on sequential load ', () => {
      expect(defaultLoadIntl).toHaveBeenNthCalledWith(2, 'es', 'intl');
    });

    it('loads the new translation data on sequential load ', () => {
      expect(loadTranslations).toHaveBeenNthCalledWith(2, 'es');
    });
  });
});
