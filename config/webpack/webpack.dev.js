const { readFileSync } = require('fs');
const merge = require('webpack-merge');
const pascalCase = require('pascal-case');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const dotenv = require('dotenv');
const common = require('./webpack.common');
const externalDependencies = require('./external.dependencies');
const paths = require('./paths');

dotenv.config();

const PROJECT_NAME = readFileSync(`${__dirname}/../../project.name`)
  .toString()
  .trim();
const library = ['Shore', pascalCase(PROJECT_NAME)];

module.exports = env => {
  if (!process.env.MERCHANT_UUID) {
    console.log('Forgot to run "cp .env.staging .env"?');
    process.exit(1);
  }
  return merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: { filename: '[name].min.js' },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
      extensions: ['.ts', '.tsx', '.js'],
    },
    context: __dirname,
    plugins: [
      new HardSourceWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: false,
        data: {
          exposed: library.join('.'),
          projectName: PROJECT_NAME,
          jsUrls: externalDependencies
            .map(dep => dep.cdnUrl) // select cdn urls
            .filter(url => !!url && url.endsWith('js')), // take js
          envConfig: {
            DEV_MODE: true,
            MERCHANT_ACCOUNT_ID: JSON.stringify(
              process.env.MERCHANT_ACCOUNT_ID
            ),
            MERCHANT_UUID: JSON.stringify(process.env.MERCHANT_UUID),
            BASE_URL_INSTAGRAM_BOOKING: JSON.stringify(
              process.env.BASE_URL_INSTAGRAM_BOOKING
            ),
          },
          clientFactory: {
            BASE_URL_API: JSON.stringify(process.env.BASE_URL_API),
            BASE_URL_COMPANY: JSON.stringify(process.env.BASE_URL_COMPANY),
            BASE_URL_INSTAGRAM_BOOKING: JSON.stringify(
              process.env.BASE_URL_INSTAGRAM_BOOKING
            ),
            BASE_URL_CORE: JSON.stringify(process.env.BASE_URL_CORE),
            BASE_URL_FILE_STORAGE: JSON.stringify(
              process.env.BASE_URL_FILE_STORAGE
            ),
            MERCHANT_ACCOUNT_ID: JSON.stringify(
              process.env.MERCHANT_ACCOUNT_ID
            ),
            MERCHANT_UUID: JSON.stringify(process.env.MERCHANT_UUID),
            REALTIME_APP_KEY: JSON.stringify(process.env.REALTIME_APP_KEY),
            REALTIME_AUTH_ENDPOINT: JSON.stringify(
              process.env.REALTIME_AUTH_ENDPOINT
            ),
            REALTIME_HTTP_HOST: JSON.stringify(process.env.REALTIME_HTTP_HOST),
            REALTIME_WS_HOST: JSON.stringify(process.env.REALTIME_WS_HOST),
          },
        },
        template: paths.templatePath,
        filename: './index.html',
      }),
    ],
    devServer: {
      hot: true,
      noInfo: false,
      compress: true,
      historyApiFallback: true,
      port: process.env.PORT || 3002,
      host: process.env.HOST || '0.0.0.0',
      stats: {
        'errors-only': true,
        children: false,
        chunks: false,
        warnings: false,
      },
    },
  });
};
