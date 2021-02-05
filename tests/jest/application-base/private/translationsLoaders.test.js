import loadTranslations from '../../../../src/application-base/private/translationsLoaders';
import logger from '../../../../src/utils/logger';

jest.mock('../../../../src/utils/logger', () => ({
  warn: jest.fn(),
}));

describe('translationsLoaders', () => {
  beforeEach(() => {
    jest.resetModules();
    logger.warn.mockClear();
  });

  it('loads en translation file', () => {
    jest.doMock('en.js', () => ({
      test: 'test',
    }));
    expect.assertions(1);
    return loadTranslations('en').then(messages => {
      expect(messages.test).toEqual('test');
    });
  });

  it('logs a warning when the regional locale is not provided and locale fallback is used', () => {
    jest.doMock('es.js', () => ({
      test: 'test-es',
    }));
    expect.assertions(1);
    return loadTranslations('es-US').then(() => {
      expect(logger.warn).toBeCalledWith(expect.stringContaining('Translations were not supplied for the es-US locale. Using es data as the fallback locale.'));
    });
  });

  it('logs a warning when the locale is not provided and en fallback is used', () => {
    jest.doMock('en.js', () => ({
      test: 'test',
    }));
    jest.doMock('es.js', () => {
      throw new Error('Translations were not supplied for the es locale.');
    });
    expect.assertions(2);
    return loadTranslations('es').then((messages) => {
      expect(messages.test).toEqual('test');
      expect(logger.warn).toBeCalledWith(expect.stringContaining('Translations were not supplied for the es locale. Using en as the fallback locale.'));
    });
  });

  it('logs a warning when the regional locale and locale are not provided and en fallback is used', () => {
    jest.doMock('en.js', () => ({
      test: 'test',
    }));
    jest.doMock('es.js', () => {
      throw new Error('Translations were not supplied for the es locale.');
    });
    jest.doMock('es-US.js', () => {
      throw new Error('Translations were not supplied for the en-US locale.');
    });
    expect.assertions(3);
    return loadTranslations('es-US').then((messages) => {
      expect(messages.test).toEqual('test');
      expect(logger.warn).toHaveBeenNthCalledWith(1, expect.stringContaining('Translations were not supplied for the es-US locale. Using es data as the fallback locale.'));
      expect(logger.warn).toHaveBeenNthCalledWith(2, expect.stringContaining('Translations were not supplied for the es locale. Using en as the fallback locale.'));
    });
  });

  it('throws an error when the locale and en fallback are not provided', () => {
    jest.doMock('en.js', () => {
      throw new Error('Translations were not supplied for the en locale.');
    });
    jest.doMock('es.js', () => {
      throw new Error('Translations were not supplied for the es locale.');
    });

    return expect(loadTranslations('es')).rejects.toThrow('Translations were not supplied for the en locale.');
  });

  it('throws an error when the regional locale and en fallback are not provided', () => {
    jest.doMock('en.js', () => {
      throw new Error('Translations were not supplied for the en locale.');
    });
    jest.doMock('en-US.js', () => {
      throw new Error('Translations were not supplied for the en-US locale.');
    });

    return expect(loadTranslations('en-US')).rejects.toThrow('Translations were not supplied for the en locale.');
  });

  describe('production environment', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
    });

    afterEach(() => {
      delete process.env.NODE_ENV;
    });

    it('still throws an error when the locale and en fallback are not provided', () => {
      jest.doMock('en.js', () => {
        throw new Error('Translations were not supplied for the en locale.');
      });
      jest.doMock('es.js', () => {
        throw new Error('Translations were not supplied for the es locale.');
      });

      return expect(loadTranslations('es')).rejects.toThrow('Translations were not supplied for the en locale.');
    });

    it('still throws an error when the regional locale and en fallback are not provided', () => {
      jest.doMock('en.js', () => {
        throw new Error('Translations were not supplied for the en locale.');
      });
      jest.doMock('en-US.js', () => {
        throw new Error('Translations were not supplied for the en-US locale.');
      });
    });
  });
});
