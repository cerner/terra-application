const navConfig = require('./navigation.config');

const siteConfig = {
  navConfig,
  includeTestEvidence: false,
  appConfig: {

    themes: {
      'Default Theme': '',
      'Clinical-lowlight-theme': 'clinical-lowlight-theme',
      'Orion Fusion Theme': 'orion-fusion-theme',
    },
  },
};

module.exports = siteConfig;
