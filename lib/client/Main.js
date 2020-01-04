'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

require('../index.css');

var _reactRouterDom = require('react-router-dom');

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routing = _react2.default.createElement(
  _reactRouterDom.Router,
  { hisory: _createBrowserHistory2.default },
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'test'
    ),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/test', component: _App2.default })
  )
);
_reactDom2.default.render(routing, document.getElementById('root'));