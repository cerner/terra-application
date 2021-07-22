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
      path: '/dev_tools',
      text: 'Developer Tools',
      pageTypes: ['tool'],
    }, {
      path: '/single-page-test',
      text: 'Single Page Test',
      pageTypes: ['spt'],
      capabilities: {
        devTools: true,
      },
    }, {
      path: '/secondary-nav-test',
      text: 'Secondary Nav Test',
      pageTypes: ['snt'],
      capabilities: {
        devTools: true,
      },
    }, {
      path: '/folder-first',
      text: 'Folder First Test',
      pageTypes: ['ff'],
      capabilities: {
        devTools: true,
      },
    }, {
      path: '/empty',
      text: 'Empty',
      pageTypes: ['empty'],
    }, {
    }, {
      path: '/tests',
      text: 'Tests',
      pageTypes: ['test'],
      capabilities: {
        devTools: true,
      },
    }, {
      path: '/guides',
      text: 'Guides',
      pageTypes: ['guide'],
    }],
  },
};

module.exports = navConfig;
