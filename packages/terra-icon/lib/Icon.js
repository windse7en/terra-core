'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('!style-loader!css-loader!sass-loader!terra-icon/lib/icon.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Should the svg mirror when dir="rtl".
   */
  isBidi: _react.PropTypes.bool,
  /**
   * JSX children.
   */
  children: _react.PropTypes.node,
  /**
   * Height of SVG.
   */
  height: _react.PropTypes.string,
  /**
   * Width of SVG.
   */
  width: _react.PropTypes.string,
  /**
   * String that labels the current element. If aria-label is present,
   * role is set to 'img' and aria-hidden is removed.
   */
  'aria-label': _react.PropTypes.string,
  /**
   * Focusable attribute. IE 10/11 are focusable without this attribute.
   */
  focusable: _react.PropTypes.bool
};
// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax


var defaultProps = {
  isBidi: false,
  children: null,
  height: '1em',
  width: '1em',
  'aria-label': null,
  focusable: false
};

var Icon = function Icon(props) {
  var attributes = Object.assign({}, props);

  attributes.className = (0, _classnames2.default)(attributes.className, { 'terra-Icon': attributes.className.indexOf('terra-Icon') < 0 }, { 'is-bidi': attributes.isBidi });

  // isBidi is not a valid html attribute, remove after adding class
  delete attributes.isBidi;

  // aria-label is present, remove aria-hidden, set role to img
  if (attributes['aria-label']) {
    attributes.role = 'img';
    attributes['aria-hidden'] = null;
  } else {
    attributes['aria-hidden'] = 'true';
  }

  return _react2.default.createElement(
    'svg',
    attributes,
    attributes.children
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

exports.default = Icon;