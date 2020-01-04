'use strict';
require('babel-polyfill');

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');


const APP_DIR = path.resolve(__dirname, 'src/client');

const Entry_Dir = path.resolve(__dirname, 'src/client');
const Output_Dir = path.resolve(__dirname, 'src/public');


const config = {
  cache: true,
  devServer: {
    historyApiFallback: false,
    publicPath: '/',
    contentBase: Output_Dir,
    hot: true,
    port: 8080,
  },
  entry: [Entry_Dir + '/Main.jsx'],
  output: {
    path: Output_Dir,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: APP_DIR,
      enforce: 'pre',
      use: [{
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      }],
    },
    {
      test: /\.jsx?$/,
      include: APP_DIR,
      exclude: /node_modules/,
      loader: 'babel-loader?cacheDirectory=true',
      query: {
        'presets': ['es2015', 'react'],
      },
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader'],
      }),
    },
    {
      test: /\.(png|svg|jpg|gif|woff|woff2)$/,
      loader: 'url-loader',
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
    alias: {
      '@src': path.join(__dirname, 'src'),
      '@components': path.join(__dirname, 'src', 'client', 'components'),
      '@containers': path.join(__dirname, 'src', 'client', 'containers'),
      '@actions': path.join(__dirname, 'src', 'client', 'actions'),
      '@reducers': path.join(__dirname, 'src', 'client', 'reducers'),
      '@sagas': path.join(__dirname, 'src', 'client', 'sagas'),
      '@utils': path.join(__dirname, 'src', 'client', 'utils'),
    },
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development'),
    }),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
    favicon: './public/favicon.ico'
  })
  ]
};

module.exports = config;
