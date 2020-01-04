'use strict';
const webpack = require('webpack');
require('babel-polyfill');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const APP_DIR = path.resolve(__dirname, 'src');

const Entry_Dir = path.resolve(__dirname, 'src/client');
const Output_Dir = path.resolve(__dirname, 'src/public');


const config = {
    cache: true,
    devServer: {
        historyApiFallback: false,
        publicPath: "/",
        contentBase: Output_Dir,
        hot: true,
        port: 8080
    },
    entry: [Entry_Dir + '/Main.jsx'],
    output: {
        path: Output_Dir,
        filename: 'index.js',
        publicPath: '/'
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
                    "presets": ["es2015", "react"]
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
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
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new UglifyJSPlugin({
            sourceMap: true
        }),
    ],
};

module.exports = config;