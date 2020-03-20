import getBrowserLocale, { isSupported, filterLanguages } from '../../../../src/browser-locale/private/getBrowserLocale';

describe('browser-locale/index', () => {
  describe('exports', () => {
    it('should export getBrowserLocale', () => {
      expect(getBrowserLocale).toBeDefined();
    });

    it('should export isSupported', () => {
      expect(isSupported).toBeDefined();
    });

    it('should export filterLanguages', () => {
      expect(filterLanguages).toBeDefined();
    });
  });

  describe('isSupported', () => {
    it('should return false if TERRA_AGGREGATED_LOCALES is undefined', () => {
      expect(isSupported('en')).toBe(false);
    });

    it('should return false if the locale is not within TERRA_AGGREGATED_LOCALES', () => {
      global.TERRA_AGGREGATED_LOCALES = ['en', 'en-US'];

      expect(isSupported('es')).toBe(false);
    });

    it('should return false if the locale is not provided', () => {
      global.TERRA_AGGREGATED_LOCALES = ['en', 'en-US'];

      expect(isSupported()).toBe(false);
    });

    it('should return false if TERRA_AGGREGATED_LOCALES is not an array', () => {
      global.TERRA_AGGREGATED_LOCALES = 'en';

      expect(isSupported('en')).toBe(false);
    });

    it('should return true if the locale is within TERRA_AGGREGATED_LOCALES', () => {
      global.TERRA_AGGREGATED_LOCALES = ['es', 'en', 'en-US'];

      expect(isSupported('en')).toBe(true);
    });
  });

  describe('filterLanguages', () => {
    beforeEach(() => {
      Object.defineProperty(navigator, 'languages', { get() { return undefined; }, configurable: true });
    });

    afterEach(() => {
      Object.defineProperty(navigator, 'languages', { get() { return undefined; }, configurable: true });
    });

    it('should return null if navigator languages is undefined', () => {
      expect(filterLanguages()).toBeNull();
    });

    it('should return null if navigator languages is defined but empty', () => {
      Object.defineProperty(navigator, 'languages', { get() { return []; }, configurable: true });

      expect(filterLanguages()).toBeNull();
    });

    it('should return the first supported locale based on the users language preference', () => {
      global.TERRA_AGGREGATED_LOCALES = ['en', 'en-US', 'es'];

      Object.defineProperty(navigator, 'languages', { get() { return ['es', 'en-US', 'en']; }, configurable: true });

      expect(filterLanguages()).toBe('es');
    });

    it('should return null if none of the navigator languages are included in the supported locale list', () => {
      global.TERRA_AGGREGATED_LOCALES = ['en', 'en-US', 'es'];

      Object.defineProperty(navigator, 'languages', { get() { return ['fr', 'br', 'du']; }, configurable: true });

      expect(filterLanguages()).toBeNull();
    });
  });

  describe('getBrowserLocale', () => {
    beforeEach(() => {
      global.TERRA_AGGREGATED_LOCALES = undefined;

      Object.defineProperty(navigator, 'languages', { get() { return undefined; }, configurable: true });
      Object.defineProperty(navigator, 'language', { get() { return undefined; }, configurable: true });
      Object.defineProperty(navigator, 'userLanguage', { get() { return undefined; }, configurable: true });
      Object.defineProperty(navigator, 'browserLanguage', { get() { return undefined; }, configurable: true });
    });

    afterEach(() => {
      global.TERRA_AGGREGATED_LOCALES = undefined;

      Object.defineProperty(navigator, 'languages', { get() { return undefined; }, configurable: true });
      Object.defineProperty(navigator, 'language', { get() { return undefined; }, configurable: true });
      Object.defineProperty(navigator, 'userLanguage', { get() { return undefined; }, configurable: true });
      Object.defineProperty(navigator, 'browserLanguage', { get() { return undefined; }, configurable: true });
    });

    it('should return the first supported locale based on the users languages preference', () => {
      global.TERRA_AGGREGATED_LOCALES = ['en', 'en-US', 'es'];

      Object.defineProperty(navigator, 'languages', { get() { return ['es', 'en-US', 'en']; }, configurable: true });

      expect(getBrowserLocale()).toBe('es');
    });

    it('should return the navigator language if it is supported and languages is undefined', () => {
      global.TERRA_AGGREGATED_LOCALES = ['en', 'en-US', 'es'];

      Object.defineProperty(navigator, 'language', { get() { return 'en-US'; }, configurable: true });

      expect(getBrowserLocale()).toBe('en-US');
    });

    it('should return the user language if it is supported and navigator language and languages is undefined or unsupported', () => {
      global.TERRA_AGGREGATED_LOCALES = ['en', 'en-US', 'fr'];

      Object.defineProperty(navigator, 'userLanguage', { get() { return 'fr'; }, configurable: true });

      expect(getBrowserLocale()).toBe('fr');
    });

    it('should return the browser language if it is supported and navigator language, languages, and userLanguage is undefined or unsupported', () => {
      global.TERRA_AGGREGATED_LOCALES = ['en', 'en-US', 'fr'];

      Object.defineProperty(navigator, 'browserLanguage', { get() { return 'fr'; }, configurable: true });

      expect(getBrowserLocale()).toBe('fr');
    });

    it('should return en if a locale cannot be interpreted from the browser', () => {
      expect(getBrowserLocale()).toBe('en');
    });

    it('should return en if a locale cannot be interpreted from the browser', () => {
      global.TERRA_AGGREGATED_LOCALES = ['en-US', 'fr'];

      // This test defines all of the possible navigator retrievals but without a supported locale.
      Object.defineProperty(navigator, 'languages', { get() { return ['bl-ar', 'es']; }, configurable: true });
      Object.defineProperty(navigator, 'language', { get() { return 'es'; }, configurable: true });
      Object.defineProperty(navigator, 'userLanguage', { get() { return 'du'; }, configurable: true });

      expect(getBrowserLocale()).toBe('en');
    });
  });
});
