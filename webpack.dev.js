'use strict';
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
let webpack = require('webpack');

const Output_Dir = path.resolve(__dirname, 'src/public');

module.exports = merge(common, {
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    contentBase: Output_Dir,
    hot: true,
    port: 8080,
    proxy: {
      '**/api/**': 'http://localhost:3000',
    },
  },
  devtool: 'eval-source-map',
});
