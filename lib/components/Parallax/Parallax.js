'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Parallax = require('./Parallax.css');

var _Parallax2 = _interopRequireDefault(_Parallax);

var _ParallaxLayer = require('../ParallaxLayer');

var _ParallaxLayer2 = _interopRequireDefault(_ParallaxLayer);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Parallax = function (_React$Component) {
  _inherits(Parallax, _React$Component);

  function Parallax(props) {
    _classCallCheck(this, Parallax);

    var _this = _possibleConstructorReturn(this, (Parallax.__proto__ || Object.getPrototypeOf(Parallax)).call(this, props));

    _this.onScroll = function (_ref) {
      var scrollTop = _ref.target.scrollTop;

      _this.setState({ scrollTop: scrollTop });
    };

    _this.state = {
      scrollTop: 0
    };
    return _this;
  }

  _createClass(Parallax, [{
    key: 'render',
    value: function render() {
      var scrollTop = this.state.scrollTop;
      var children = this.props.children;


      return _react2.default.createElement(
        'div',
        {
          className: _Parallax2.default.root,
          onScroll: this.onScroll
        },
        _react2.default.Children.map(children, function (o) {
          return _react2.default.cloneElement(o, {
            scrollTop: scrollTop
          });
        })
      );
    }
  }]);

  return Parallax;
}(_react2.default.Component);

Parallax.childContextTypes = {
  scrollTop: _propTypes2.default.number.isRequired
};


Parallax.Layer = _ParallaxLayer2.default;

exports.default = (0, _withStyles2.default)(_Parallax2.default)(Parallax);