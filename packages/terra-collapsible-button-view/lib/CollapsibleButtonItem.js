'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./CollapsibleButtonItem.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Sets the button text
   */
  text: _react.PropTypes.string,
  /**
   * An optional icon. Nested inline with the text when provided
   */
  icon: _react.PropTypes.element,
  /**
   * Reverses the position of the icon and text
   */
  isReversed: _react.PropTypes.bool,
  /**
   * Indicates if the button should be selected on initial render.
   */
  isSelected: _react.PropTypes.bool,
  /**
   * Indidcates if the element is viewed inline or in list style.
   */
  isHidden: _react.PropTypes.bool,
  /**
   * Callback function triggered when clicked
   */
  onClick: _react.PropTypes.func,
  /**
   * Child Nodes
   */
  children: _react.PropTypes.node
};

var defaultProps = {
  text: '',
  icon: undefined,
  isReversed: false,
  isSelected: false,
  isHidden: false,
  onClick: undefined,
  children: undefined
};

var CollapsibleButtonItem = function CollapsibleButtonItem(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      isReversed = _ref.isReversed,
      isSelected = _ref.isSelected,
      isHidden = _ref.isHidden,
      onClick = _ref.onClick,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['text', 'icon', 'isReversed', 'isSelected', 'isHidden', 'onClick', 'children']);

  var buttonClassName = (0, _classnames2.default)(['terra-CollapsibleButtonItem', { 'terra-CollapsibleButtonItem--selected': isSelected }, customProps.className]);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: buttonClassName }),
    text
  );
};

CollapsibleButtonItem.propTypes = propTypes;
CollapsibleButtonItem.defaultProps = defaultProps;

exports.default = CollapsibleButtonItem;