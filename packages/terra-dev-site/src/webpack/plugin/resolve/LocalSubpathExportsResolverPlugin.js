/* eslint-ignore no-restricted-syntax, no-continue */

const path = require('path');
const glob = require('glob');
const fs = require('fs');
const AliasPlugin = require('enhanced-resolve/lib/AliasPlugin');
/**
 * Setup aliases for any packages found in the root directory globs.
 * This aliases the package name for the folder the package name resides in.
 * This allows for importing the package as if it was in the node modules folder.
 * {packageName: pathToFolder}
 */
class LocalSubpathExportsResolverPlugin {
  constructor({ rootDirectories = [process.cwd()] } = {}) {
    const result = rootDirectories.reduce((acc, root) => acc.concat(glob.sync(`${root}/package.json`))
      .filter((rootPath) => JSON.parse(fs.readFileSync(rootPath)).exports)
      .map((rootPath) => {
        const dirname = path.dirname(rootPath);
        const packageName = JSON.parse(fs.readFileSync(rootPath)).name;

        const { exports } = JSON.parse(fs.readFileSync(rootPath));

        const subpathAliases = [];

        for (const [key, value] of Object.entries(exports)) {
          if (key.includes('*')) continue;

          let alias = value.replace('./', `${dirname}/`);
          alias = alias.replace('/index.js', '');

          subpathAliases.push({
            name: key.replace('./', `${packageName}/`),
            onlyModule: false,
            alias,
          });
        }

        return subpathAliases;
      }),
    []);

    this.alias = result.flat();
  }

  apply(resolver) {
    new AliasPlugin('described-resolve', this.alias, 'resolve').apply(resolver);
  }
}

module.exports = LocalSubpathExportsResolverPlugin;
