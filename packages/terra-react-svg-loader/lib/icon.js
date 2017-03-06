'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _transformChildren = require('./transformChildren');

var _transformChildren2 = _interopRequireDefault(_transformChildren);

var _htmlToReactAttributes = require('./htmlToReactAttributes');

var _htmlToReactAttributes2 = _interopRequireDefault(_htmlToReactAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Icon - Object that stores an SVG and its name
 * @param {string} name of SVG
 * @param {HTMLElement} node html node
 */
var Icon = function Icon(name, node) {
  _classCallCheck(this, Icon);

  this.name = name;
  this.children = (0, _transformChildren2.default)(node);
  this.attributes = Array.prototype.slice.call(node.attributes).map(function (x) {
    return { name: (0, _htmlToReactAttributes2.default)(x.name), value: x.value };
  }).reduce(function (attrs, x) {
    return _extends(_defineProperty({}, x.name, x.value), attrs);
  }, {});
};

exports.default = Icon;