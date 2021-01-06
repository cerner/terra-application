import loadTranslations from '../../../../src/application-base/private/translationsLoaders';

describe('translationsLoaders', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('loads en translation file', () => {
    jest.doMock('en.js', () => ({
      __esModule: true,
      default: {
        test: 'test',
      }
    }));
    expect.assertions(1);
    return loadTranslations('en').then(messages => {
      expect(messages.test).toEqual('test');
    });
  });

  it('logs a warning when the regional locale is not provided and locale fallback is used', () => {
    jest.doMock('es.js', () => ({
      __esModule: true,
      default: {
        test: 'test-es',
      }
    }));
    expect.assertions(1);
    return loadTranslations('es-US').then(() => {
      expect(console.warn).toBeCalledWith(expect.stringContaining('Translations were not supplied for the es-US locale. Using es as the fallback locale.'));
    });
  });

  it('logs a warning when the locale is not provided and en fallback is used', () => {
    jest.doMock('en.js', () => ({
      __esModule: true,
      default: {
        test: 'test',
      }
    }));
    expect.assertions(1);
    return loadTranslations('es').then(() => {
      expect(console.warn).toBeCalledWith(expect.stringContaining('Translations were not supplied for the es locale. Using en as the fallback locale.'));
    });
  });

  it('logs a warning when the regional locale and locale are not provided and en fallback is used', () => {
    jest.doMock('en.js', () => ({
      __esModule: true,
      default: {
        test: 'test',
      }
    }));
    expect.assertions(1);
    return loadTranslations('es-US').then(() => {
      expect(console.warn).toBeCalledWith(expect.stringContaining('Translations were not supplied for the es-US or es locales. Using en as the fallback locale.'));
    });
  });

  it('throws an error when the locale and en fallback are not provided', () => {
    expect(() => loadTranslations('es')).toThrowErrorMatchingSnapshot();
  });

  it('throws an error when the regional locale and en fallback are not provided', () => {
    expect(() => loadTranslations('es-US')).toThrowErrorMatchingSnapshot();
  });

  describe('production environment', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
    });

    afterEach(() => {
      delete process.env.NODE_ENV;
    });

    it('only falls back when the regional locale is not provided and locale fallback is used', () => {
      jest.doMock('es.js', () => ({
        __esModule: true,
        default: {
          test: 'test-es',
        }
      }));
      expect.assertions(1);
      return loadTranslations('es-US').then(() => {
        expect(console.warn).not.toHaveBeenCalled();
      });
    });

    it('only falls back when the locale is not provided and en fallback is used', () => {
      jest.doMock('en.js', () => ({
        __esModule: true,
        default: {
          test: 'test',
        }
      }));
      expect.assertions(1);
      return loadTranslations('es').then(() => {
        expect(console.warn).not.toHaveBeenCalled();
      });
    });

    it('only falls back when the regional locale and locale are not provided and en fallback is used', () => {
      jest.doMock('en.js', () => ({
        __esModule: true,
        default: {
          test: 'test',
        }
      }));
      expect.assertions(1);
      return loadTranslations('es-US').then(() => {
        expect(console.warn).not.toHaveBeenCalled();
      });
    });

    it('still throws an error when the locale and en fallback are not provided', () => {
      expect(() => translationsLoaders('es')).toThrowErrorMatchingSnapshot();
    });

    it('still throws an error when the regional locale and en fallback are not provided', () => {
      expect(() => translationsLoaders('es-US')).toThrowErrorMatchingSnapshot();
    });
  });
});
