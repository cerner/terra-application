const fs = require('fs');

const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
let browserslist = require('@cerner/browserslist-config-terra');

const packagePath = path.join(__dirname, '../../');
const browsersListFile = path.resolve(packagePath, '.browserslistrc');

if (fs.existsSync(browsersListFile)) {
  fs.truncate(browsersListFile, 0, () => {});
}

browserslist = browserslist.toString().split(',').join('\n');

fs.writeFile(browsersListFile, browserslist, () => {});
