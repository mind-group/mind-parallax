'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ParallaxLayer = require('./ParallaxLayer.css');

var _ParallaxLayer2 = _interopRequireDefault(_ParallaxLayer);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParallaxLayer = function (_React$Component) {
  _inherits(ParallaxLayer, _React$Component);

  function ParallaxLayer() {
    _classCallCheck(this, ParallaxLayer);

    return _possibleConstructorReturn(this, (ParallaxLayer.__proto__ || Object.getPrototypeOf(ParallaxLayer)).apply(this, arguments));
  }

  _createClass(ParallaxLayer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          offset = _props.offset,
          size = _props.size,
          style = _props.style,
          scrollTop = _props.scrollTop,
          _props$speed = _props.speed,
          speed = _props$speed === undefined ? 1 : _props$speed;


      return _react2.default.createElement(
        'div',
        {
          className: _ParallaxLayer2.default.root,
          style: _extends({}, style, {
            top: offset,
            height: size
          })
        },
        _react2.default.createElement(
          'div',
          { style: {
              top: -scrollTop * speed
            } },
          children
        )
      );
    }
  }]);

  return ParallaxLayer;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_ParallaxLayer2.default)(ParallaxLayer);