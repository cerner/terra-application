const navConfig = {
  navigation: {
    index: '/home',
    links: [{
      path: '/home',
      text: 'Home',
      pageTypes: ['home'],
    }, {
      path: '/Guides',
      text: 'Guides',
      pageTypes: ['guide'],
    }, {
      path: '/reference',
      text: 'Reference',
      pageTypes: ['reference'],
    }, {
      path: '/demo',
      text: 'Demo',
      pageTypes: ['demo'],
    }, {
      path: '/tests',
      text: 'Tests',
      pageTypes: ['test'],
    }],
  },
};

module.exports = navConfig;
