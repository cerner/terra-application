const path = require('path');

const DirectorySwitcherPlugin = require('../../../../../src/webpack/plugin/resolve/DirectorySwitcherPlugin');

describe('DirectorySwitcherPlugin', () => {
  it('generates the dir structure', () => {
    const plugin = new DirectorySwitcherPlugin({
      source: 'src',
      distribution: 'lib',
      rootDirectories: [
        path.join(__dirname),
        path.join(__dirname, 'packages', '*'),
      ],
    });

    expect(plugin.dirs).toEqual([
      {
        distribution: path.join(__dirname, 'lib'),
        source: path.join(__dirname, 'src'),
      },
      {
        distribution: path.join(__dirname, 'packages', 'test', 'lib'),
        source: path.join(__dirname, 'packages', 'test', 'src'),
      },
    ]);
    expect(plugin.extensions).toEqual(['.js']);
  });
});
