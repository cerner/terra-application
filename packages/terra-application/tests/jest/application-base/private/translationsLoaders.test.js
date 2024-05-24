import loadTranslations from '../../../../src/application-base/private/translationsLoaders';
import { Logger } from '../../../../src/utils';

describe('translationsLoaders', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('loads en translation file', async () => {
    jest.doMock('en.js', () => ({
      test: 'test',
    }));
    expect.assertions(1);
    await loadTranslations('en').then(messages => {
      expect(messages.test).toEqual('test');
    });
  });

  it('logs a warning when the regional locale is not provided and locale fallback is used', async () => {
    const spy = jest.spyOn(Logger, 'warn').mockImplementation(() => {});
    jest.doMock('es.js', () => ({
      test: 'test-es',
    }));
    expect.assertions(1);
    await loadTranslations('es-US').then(() => {
      expect(spy).toBeCalledWith(expect.stringContaining('Translations were not supplied for the es-US locale. Using es data as the fallback locale.'));
      spy.mockRestore();
    });
  });

  it('logs a warning when the locale is not provided and en fallback is used', async () => {
    const spy = jest.spyOn(Logger, 'warn').mockImplementation(() => {});

    let callCount = 0;

    // this doMock actually mocks both 'en.js' and 'es.js' due to the module name mapper mapping the en and es files to the same file.
    jest.doMock('en.js', () => {
      if (callCount === 0) {
        callCount += 1;
        throw new Error('Translations were not supplied for the es locale.');
      }
      return ({
        test: 'test',
      });
    });

    await loadTranslations('es').then((messages) => {
      expect(messages.test).toEqual('test');
      expect(spy).toBeCalledWith(expect.stringContaining('Translations were not supplied for the es locale. Using en as the fallback locale.'));
      spy.mockRestore();
    });
  });

  it('logs a warning when the regional locale and locale are not provided and en fallback is used', async () => {
    const spy = jest.spyOn(Logger, 'warn').mockImplementation(() => {});

    let callCount = 0;

    // this doMock actually mocks 'es-ES.js' 'en.js' and 'es.js' due to the module name mapper mapping the en and es files to the same file.
    jest.doMock('en.js', () => {
      if (callCount === 0) {
        callCount += 1;
        throw new Error('Translations were not supplied for the es-ES locale.');
      }
      if (callCount === 1) {
        callCount += 1;
        throw new Error('Translations were not supplied for the es locale.');
      }
      return ({
        test: 'test',
      });
    });
    await loadTranslations('es-ES').then((messages) => {
      expect(messages.test).toEqual('test');
      expect(spy).toHaveBeenNthCalledWith(1, expect.stringContaining('Translations were not supplied for the es-ES locale. Using es data as the fallback locale.'));
      expect(spy).toHaveBeenNthCalledWith(2, expect.stringContaining('Translations were not supplied for the es locale. Using en as the fallback locale.'));
      spy.mockRestore();
    });
  });

  it('throws an error when the locale and en fallback are not provided', async () => {
    const spy = jest.spyOn(Logger, 'warn').mockImplementation(() => {});
    let callCount = 0;

    // this doMock actually mocks both 'en.js' and 'es.js' due to the module name mapper mapping the en and es files to the same file.
    jest.doMock('en.js', () => {
      if (callCount === 0) {
        callCount += 1;
        throw new Error('Translations were not supplied for the es locale.');
      }
      throw new Error('Translations were not supplied for the en locale.');
    });

    await expect(loadTranslations('es')).rejects.toThrow('Translations were not supplied for the en locale.');
    spy.mockRestore();
  });

  it('throws an error when the regional locale and en fallback are not provided', async () => {
    const spy = jest.spyOn(Logger, 'warn').mockImplementation(() => {});
    let callCount = 0;

    // this doMock actually mocks both 'en.js' and 'es.js' due to the module name mapper mapping the en and es files to the same file.
    jest.doMock('en.js', () => {
      if (callCount === 0) {
        callCount += 1;
        throw new Error('Translations were not supplied for the en-US locale.');
      }
      throw new Error('Translations were not supplied for the en locale.');
    });

    await expect(loadTranslations('en-US')).rejects.toThrow('Translations were not supplied for the en locale.');
    spy.mockRestore();
  });

  describe('production environment', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
    });

    afterEach(() => {
      delete process.env.NODE_ENV;
    });

    it('still throws an error when the locale and en fallback are not provided', async () => {
      const spy = jest.spyOn(Logger, 'warn').mockImplementation(() => {});
      let callCount = 0;

      // this doMock actually mocks both 'en.js' and 'es.js' due to the module name mapper mapping the en and es files to the same file.
      jest.doMock('en.js', () => {
        if (callCount === 0) {
          callCount += 1;
          throw new Error('Translations were not supplied for the es locale.');
        }
        throw new Error('Translations were not supplied for the en locale.');
      });

      await expect(loadTranslations('es')).rejects.toThrow('Translations were not supplied for the en locale.');
      spy.mockRestore();
    });

    it('still throws an error when the regional locale and en fallback are not provided', async () => {
      const spy = jest.spyOn(Logger, 'warn').mockImplementation(() => {});
      let callCount = 0;

      // this doMock actually mocks both 'en.js' and 'es.js' due to the module name mapper mapping the en and es files to the same file.
      jest.doMock('en.js', () => {
        if (callCount === 0) {
          callCount += 1;
          throw new Error('Translations were not supplied for the en-US locale.');
        }
        throw new Error('Translations were not supplied for the en locale.');
      });
      await expect(loadTranslations('en-US')).rejects.toThrow('Translations were not supplied for the en locale.');
      spy.mockRestore();
    });
  });
});
