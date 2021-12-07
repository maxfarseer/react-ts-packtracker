const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',

  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].min.css' }),
    new CleanWebpackPlugin(),
  ],
});
