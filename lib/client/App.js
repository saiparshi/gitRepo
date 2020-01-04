'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _logo = require('../logo.svg');

var _logo2 = _interopRequireDefault(_logo);

require('../App.css');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      types: ['test1', 'test2']
    };

    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // axios.get(`https://hudapi-dev.mrcooper.in/documentType/`)
      //     .then(res => {
      //         const types = res.data;
      //         this.setState({ types });
      //     })
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          'div',
          { className: 'App-header' },
          _react2.default.createElement('img', { src: _logo2.default, className: 'App-logo', alt: 'logo' }),
          _react2.default.createElement(
            'h2',
            null,
            'Welcome to React'
          )
        ),
        _react2.default.createElement(
          'p',
          { className: 'App-intro' },
          'To get started, edit ',
          _react2.default.createElement(
            'code',
            null,
            'src/App.jsx'
          ),
          ' and save to reload.'
        ),
        _react2.default.createElement(
          'ul',
          null,
          this.state.types.map(function (index, type) {
            return _react2.default.createElement(
              'li',
              { key: index },
              type
            );
          })
        )
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;