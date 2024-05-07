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

    const result = rootDirectories.reduce((acc, root) => acc.concat(glob.sync(`${root}/package.json`).map((rootPath) => {
      const dirname = path.dirname(rootPath);
      const packageName = JSON.parse(fs.readFileSync(rootPath)).name;

      const exports = JSON.parse(fs.readFileSync(rootPath)).exports
      if(exports) {
        console.log(dirname);
        console.log(exports);

      const subpathAliases = [];


        for (const [key, value] of Object.entries(exports)) {
        
          subpathAliases.push({
            name: key.replace('./', `${packageName}/`),
            onlyModule: false,
            alias: value.replace('./', `${dirname}/`)
          })
  
          console.log(`${key}: ${value}`);
        }
  
        return subpathAliases;
      }

      return {}

    })),
    []);

    this.alias = result.flat()
    console.log(this.alias);
    // this.alias
  }

  apply(resolver) {
    new AliasPlugin('described-resolve', this.alias, 'resolve').apply(resolver);
  }
}

module.exports = LocalSubpathExportsResolverPlugin;
