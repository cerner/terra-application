const loadLocaleData = (locale, polyfill) => {
  if (polyfill === 'intl') {
    switch (locale) {
      case 'en':
        return import('intl/locale-data/jsonp/en');
      case 'en-AU':
        return import('intl/locale-data/jsonp/en-AU');
      case 'en-CA':
        return import('intl/locale-data/jsonp/en-CA');
      case 'en-US':
        return import('intl/locale-data/jsonp/en-US');
      case 'en-GB':
        return import('intl/locale-data/jsonp/en-GB');
      case 'es':
        return import('intl/locale-data/jsonp/es');
      case 'es-US':
        return import('intl/locale-data/jsonp/es-US');
      case 'es-ES':
        return import('intl/locale-data/jsonp/es-ES');
      case 'de':
        return import('intl/locale-data/jsonp/de');
      case 'fr':
        return import('intl/locale-data/jsonp/fr');
      case 'fr-FR':
        return import('intl/locale-data/jsonp/fr-FR');
      case 'nl':
        return import('intl/locale-data/jsonp/nl');
      case 'nl-BE':
        return import('intl/locale-data/jsonp/nl-BE');
      case 'pt':
        return import('intl/locale-data/jsonp/pt');
      case 'pt-BR':
        return import('intl/locale-data/jsonp/pt-BR');
      case 'sv':
        return import('intl/locale-data/jsonp/sv');
      case 'sv-SE':
        return import('intl/locale-data/jsonp/sv-SE');
      default:
        return Promise.reject(Error(`Locale data for ${polyfill} was not supplied for the ${locale} locale.`));
    }
  } else {
    switch (locale) {
      case 'en':
        return import('@formatjs/intl-relativetimeformat/locale-data/en');
      case 'en-AU':
        return import('@formatjs/intl-relativetimeformat/locale-data/en-AU');
      case 'en-CA':
        return import('@formatjs/intl-relativetimeformat/locale-data/en-CA');
      case 'en-US':
        return import('@formatjs/intl-relativetimeformat/locale-data/en-US');
      case 'en-GB':
        return import('@formatjs/intl-relativetimeformat/locale-data/en-GB');
      case 'es':
      case 'es-ES':
        return import('@formatjs/intl-relativetimeformat/locale-data/es');
      case 'es-US':
        return import('@formatjs/intl-relativetimeformat/locale-data/es-US');
      case 'de':
        return import('@formatjs/intl-relativetimeformat/locale-data/de');
      case 'fr':
      case 'fr-FR':
        return import('@formatjs/intl-relativetimeformat/locale-data/fr');
      case 'nl':
        return import('@formatjs/intl-relativetimeformat/locale-data/nl');
      case 'nl-BE':
        return import('@formatjs/intl-relativetimeformat/locale-data/nl-BE');
      case 'pt':
      case 'pt-BR':
        return import('@formatjs/intl-relativetimeformat/locale-data/pt');
      case 'sv':
      case 'sv-SE':
        return import('@formatjs/intl-relativetimeformat/locale-data/sv');
      default:
        return Promise.reject(Error(`Locale data for ${polyfill} was not supplied for the ${locale} locale.`));
    }
  }
};

export default loadLocaleData;
