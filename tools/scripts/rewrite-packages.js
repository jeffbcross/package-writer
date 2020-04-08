const rootPackage = require('../../package.json');
const builtPackages = ['apps/afunction'];
const REWRITE_TOKEN = '<REWRITE-VERSION-HERE>';
const fs = require('fs');
const path = require('path');

builtPackages.forEach(pkgPath => {
  const fullPath = path.resolve(
    __dirname,
    '../../dist/',
    pkgPath,
    'package.json'
  );

  const pkg = require(fullPath);
  for (let [depName, value] of Object.entries(pkg.dependencies)) {
    if (value === REWRITE_TOKEN) {
      let rootVersion = rootPackage.dependencies[depName];
      if (!rootVersion) {
        throw new Error(`No root package entry for ${depName}!`);
      }
      pkg.dependencies[depName] = rootVersion;
    }
  }
  fs.writeFileSync(fullPath, JSON.stringify(pkg));
});
