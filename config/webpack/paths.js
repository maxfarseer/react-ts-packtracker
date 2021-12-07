const { resolve } = require('path');

module.exports = {
  root: resolve(__dirname, '../', '../'),
  outputPath: resolve(__dirname, '../', '../', 'build'),
  entryPath: resolve(__dirname, '../', '../', 'src/index.ts'),
  assetsPath: resolve(__dirname, '../', '../', 'src/assets'),
  utilsPath: resolve(__dirname, '../', '../', 'src/utils'),
  componentsPath: resolve(__dirname, '../', '../', 'src/components'),
  templatePath: resolve(
    __dirname,
    '../',
    '../',
    'dev-assets/index.template.ejs'
  ),
};
