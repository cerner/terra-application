const navConfig = {
  navigation: {
    index: '/home',
    links: [{
      path: '/home',
      text: 'Home',
      pageTypes: ['home'],
    }, {
      path: '/application',
      text: 'Application',
      pageTypes: ['app'],
      capabilities: {
        devTools: true,
      },
    }, {
      path: '/tests',
      text: 'Tests',
      pageTypes: ['test'],
      capabilities: {
        devTools: true,
      },
    }],
  },
};

module.exports = navConfig;
