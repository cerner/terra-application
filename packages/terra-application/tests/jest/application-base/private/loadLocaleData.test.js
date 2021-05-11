import loadLocaleData from '../../../../src/application-base/private/loadLocaleData';

const locales = ['en', 'en-AU', 'en-CA', 'en-US', 'en-GB', 'es', 'es-US', 'es-ES', 'de', 'fr', 'fr-FR', 'nl', 'nl-BE', 'pt', 'pt-BR', 'sv', 'sv-SE'];

describe('loadLocaleData', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  locales.forEach((locale) => {
    it(`loads ${locale} intl data`, () => {
      jest.doMock(`intl/locale-data/jsonp/${locale}.js`, () => ({
        localeData: `${locale} included`,
      }));
      expect.assertions(1);
      return loadLocaleData(locale, 'intl').then((module) => {
        expect(module.localeData).toEqual(`${locale} included`);
      });
    });

    if (locale === 'es-ES') {
      it('loads es intl-relativetimeformat data for es-ES locale', () => {
        jest.doMock('@formatjs/intl-relativetimeformat/locale-data/es.js', () => ({
          localeData: 'es included',
        }));
        expect.assertions(1);
        return loadLocaleData(locale, 'intl-relativetimeformat').then((module) => {
          expect(module.localeData).toEqual('es included');
        });
      });
    } else if (locale === 'fr-FR') {
      it('loads fr intl-relativetimeformat data for fr-FR locale', () => {
        jest.doMock('@formatjs/intl-relativetimeformat/locale-data/fr.js', () => ({
          localeData: 'fr included',
        }));
        expect.assertions(1);
        return loadLocaleData(locale, 'intl-relativetimeformat').then((module) => {
          expect(module.localeData).toEqual('fr included');
        });
      });
    } else if (locale === 'sv-SE') {
      it('loads sv intl-relativetimeformat data for sv-SE locale', () => {
        jest.doMock('@formatjs/intl-relativetimeformat/locale-data/sv.js', () => ({
          localeData: 'sv included',
        }));
        expect.assertions(1);
        return loadLocaleData(locale, 'intl-relativetimeformat').then((module) => {
          expect(module.localeData).toEqual('sv included');
        });
      });
    } else if (locale === 'pt-BR') {
      it('loads pt intl-relativetimeformat data for pt-BR locale', () => {
        jest.doMock('@formatjs/intl-relativetimeformat/locale-data/pt.js', () => ({
          localeData: 'pt included',
        }));
        expect.assertions(1);
        return loadLocaleData(locale, 'intl-relativetimeformat').then((module) => {
          expect(module.localeData).toEqual('pt included');
        });
      });
    } else {
      it(`loads ${locale} intl-relativetimeformat data`, () => {
        jest.doMock(`@formatjs/intl-relativetimeformat/locale-data/${locale}.js`, () => ({
          localeData: `${locale} included`,
        }));
        expect.assertions(1);
        return loadLocaleData(locale, 'intl-relativetimeformat').then((module) => {
          expect(module.localeData).toEqual(`${locale} included`);
        });
      });
    }
  });

  it('throws error when intl locale data does not exist', () => {
    expect.assertions(1);
    return expect(loadLocaleData('fake', 'intl')).rejects.toThrow();
  });

  it('throws error when intl-relativetimeformat locale data does not exist', () => {
    expect.assertions(1);
    return expect(loadLocaleData('fake', 'intl-relativetimeformat')).rejects.toThrow();
  });
});
