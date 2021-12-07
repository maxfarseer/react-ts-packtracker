const pascalCase = require('pascal-case');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const externalDependencies = require('./external.dependencies');
const paths = require('./paths');
const rules = require('./rules');

const NODE_ENV = process.env.NODE_ENV || 'development';
const PROJECT_NAME = readFileSync(`${__dirname}/../../project.name`)
  .toString()
  .trim();
const library = ['Shore', pascalCase(PROJECT_NAME)];

const externals = externalDependencies.reduce(
  (result, entry) => ({
    ...result,
    ...(!!entry.moduleName && !!entry.exposed
      ? { [entry.moduleName]: entry.exposed }
      : {}),
  }),
  {}
);

const cdnBaseUrl = process.env.CDN_BASE_URL;
if (!cdnBaseUrl) {
  console.log('env variable CDN_BASE_URL is missing');
  process.exit(1);
}

const webpackConfig = {
  // webpack will take the files from ./src/index as entry point
  entry: {
    [PROJECT_NAME]: paths.entryPath,
  },
  // output will place [name].min.js inside ./build
  output: {
    path: paths.outputPath,
    publicPath: '/',
    filename: '[name].min.js',
    library,
    libraryTarget: 'window',
  },
  module: {
    rules,
  },
  /* adding .ts and .tsx to resolve.extensions will help babel look for .ts and
  .tsx files to transpile */
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@assets': paths.assetsPath,
      '@utils': paths.utilsPath,
      '@components': paths.componentsPath,
    },
  },
  externals,
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        PROJECT_NAME: JSON.stringify(PROJECT_NAME),
        BUILD_DATE: JSON.stringify(new Date().toISOString()),
        CDN_BASE_URL: JSON.stringify(cdnBaseUrl),
      },
    }),
    new GenerateJsonPlugin('app-manifest.json', {
      exposed: library.join('.'),
      createdAt: new Date().toISOString(),
      gitRevision: execSync('git rev-parse HEAD')
        .toString()
        .trim(),
      baseURL: cdnBaseUrl,
      script: `${PROJECT_NAME}.min.js`,
      style: `${PROJECT_NAME}.min.css`,
      translations: [
        {
          template: `locales/${PROJECT_NAME}.__LANG__.json`,
          namespace: `${PROJECT_NAME}`,
        },
      ],
      externalDependencies: externalDependencies
        .map(entry => entry.cdnUrl) // select CDN URLs
        .filter(url => !!url), // skip undefined, null, blank URLs
    }),
  ],
};

module.exports = webpackConfig;
