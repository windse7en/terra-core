'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CollapsibleButtonItem = require('./CollapsibleButtonItem');

var _CollapsibleButtonItem2 = _interopRequireDefault(_CollapsibleButtonItem);

require('./CollapsibleButtonGroup.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * Child nodes
   **/
  children: _react.PropTypes.node,
  /**
   * Indicates if the button group should have toggle-style selectability
   **/
  isSelectable: _react.PropTypes.bool,
  /**
   * Indicates if the button group should have toggle-style selectability
   **/
  isHidden: _react.PropTypes.bool,
  /**
   * Callback function when the state changes
   **/
  onChange: _react.PropTypes.func
};

var defaultProps = {
  children: undefined,
  isSelectable: false,
  isHidden: false,
  onChange: undefined
};

var CollapsibleButtonGroup = function (_React$Component) {
  _inherits(CollapsibleButtonGroup, _React$Component);

  _createClass(CollapsibleButtonGroup, null, [{
    key: 'getInitialState',
    value: function getInitialState(buttons, isSelectable) {
      if (!isSelectable) {
        return null;
      }

      for (var i = 0; i < buttons.length; i += 1) {
        if (buttons[i].props.isSelected) {
          return i;
        }
      }

      return null;
    }
  }]);

  function CollapsibleButtonGroup(props) {
    _classCallCheck(this, CollapsibleButtonGroup);

    var _this = _possibleConstructorReturn(this, (CollapsibleButtonGroup.__proto__ || Object.getPrototypeOf(CollapsibleButtonGroup)).call(this, props));

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.state = {
      selectedIndex: CollapsibleButtonGroup.getInitialState(_this.props.buttons.concat(_this.props.children), _this.props.isSelectable)
    };
    return _this;
  }

  _createClass(CollapsibleButtonGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var newSelectedIndex = CollapsibleButtonGroup.getInitialState(nextProps.buttons.concat(nextProps.children), nextProps.isSelectable);

      if (newSelectedIndex !== this.state.selectedIndex) {
        this.setState({ selectedIndex: newSelectedIndex });
      }
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick(event, index) {
      // No need to re-render if the button clicked is already selected
      if (this.state.selectedIndex !== index) {
        this.setState({ selectedIndex: index });

        if (this.props.onChange) {
          this.props.onChange(this.state.selectedIndex);
        }
      }
    }
  }, {
    key: 'wrapOnClick',
    value: function wrapOnClick(item, index) {
      var _this2 = this;

      var onClick = item.props.onClick;
      return function (event) {
        _this2.handleOnClick(event, index);

        if (onClick) {
          onClick(event);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          onChange = _props.onChange,
          isSelectable = _props.isSelectable,
          children = _props.children,
          customProps = _objectWithoutProperties(_props, ['onChange', 'isSelectable', 'children']);

      var buttonGroupClassNames = (0, _classnames2.default)(['terra-CollapsibleButtonGroup', customProps.className]);

      var allButtons = children.map(function (button, i) {
        var onClick = void 0;
        if (isSelectable) {
          onClick = _this3.wrapOnClick(button, i);
        } else {
          onClick = button.props.onClick;
        }

        return _react2.default.cloneElement(button, {
          onClick: onClick,
          isSelected: _this3.state.selectedIndex === i
        });
      });

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: buttonGroupClassNames }),
        allButtons
      );
    }
  }]);

  return CollapsibleButtonGroup;
}(_react2.default.Component);

CollapsibleButtonGroup.propTypes = propTypes;
CollapsibleButtonGroup.defaultProps = defaultProps;

exports.default = CollapsibleButtonGroup;