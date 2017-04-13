'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

require('./CollapsibleButtonView.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint-disable no-debugger*/

var propTypes = {
  /**
   * The children to be placed within the button view.
   */
  children: _react.PropTypes.node,
  /**
   * The children to be placed within the button view.
   */
  alignment: _react.PropTypes.oneOf(['alignStart', 'alignEnd'])
};

var defaultProps = {
  children: undefined,
  alignment: 'alignStart'
};

var CollapsibleButtonView = function (_React$Component) {
  _inherits(CollapsibleButtonView, _React$Component);

  function CollapsibleButtonView(props) {
    _classCallCheck(this, CollapsibleButtonView);

    var _this = _possibleConstructorReturn(this, (CollapsibleButtonView.__proto__ || Object.getPrototypeOf(CollapsibleButtonView)).call(this, props));

    _this.state = { hiddenIndexes: [] };
    _this.setContainer = _this.setContainer.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.toggleButton = _react2.default.createElement(_terraButton2.default, { text: '\u2026', onClick: _this.handleToggle, ref: _this.setButtonNode });
    return _this;
  }

  _createClass(CollapsibleButtonView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.parentContainer) {
        this.resizeObserver = new _resizeObserverPolyfill2.default(function (entries) {
          _this2.setState({ hiddenIndexes: [] });
          _this2.forceUpdate();
          _this2.handleResize(entries[0].contentRect.width);
        });
        this.resizeObserver.observe(this.parentContainer);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.parentContainer) {
        this.resizeObserver.disconnect(this.parentContainer);
        this.container = null;
        this.parentContainer = null;
      }
    }
  }, {
    key: 'setContainer',
    value: function setContainer(node) {
      if (node === null) {
        return;
      } // Ref callbacks happen on mount and unmount, element will be null on unmount
      this.container = node;
      this.parentContainer = node.parentNode;
    }
  }, {
    key: 'setButtonNode',
    value: function setButtonNode(node) {
      if (node === null) {
        return;
      } // Ref callbacks happen on mount and unmount, element will be null on unmount
      this.buttonNode = node;
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle() {
      if (this.state.toggleOpen) {
        this.handleResize(this.parentNode.getBoundingClientRect().width);
      } else {
        this.setState({ toggleOpen: true, hiddenIndexes: [] });
      }
    }
  }, {
    key: 'handleResize',
    value: function handleResize(width) {
      // do calculation here
      var widthToMeasure = width;
      var hiddenIndexes = [];
      var calcWidth = 0;

      for (var i = 0; i < this.props.children.length; i += 1) {
        var child = this.container.children[i];
        if (!child) {
          break;
        }
        calcWidth += child.getBoundingClientRect().width;
        if (calcWidth > widthToMeasure) {
          hiddenIndexes.push(i);
        }
      }

      if (hiddenIndexes.length !== this.state.hiddenIndexes.length) {
        this.setState({ toggleOpen: false, hiddenIndexes: hiddenIndexes });
      }
    }
  }, {
    key: 'visibleChildComponents',
    value: function visibleChildComponents(children) {
      var visibleChildren = [];
      for (var i = 0; i < children.length; i += 1) {
        if (this.state.hiddenIndexes.indexOf(i) < 0) {
          visibleChildren.push(children[i]);
        }
      }
      return visibleChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          alignment = _props.alignment,
          customProps = _objectWithoutProperties(_props, ['children', 'alignment']);

      var listClassNames = (0, _classnames2.default)(['terra-CollapsibleButtonView', _defineProperty({}, 'terra-CollapsibleButtonView-' + alignment, alignment), customProps.className]);

      var visibleChildren = this.visibleChildComponents(children);
      var hiddenChildren = this.hiddenChildComponents(children);

      var toggle = void 0;
      if (hiddenChildren.length > 0) {
        toggle = this.toggleButton;
      }

      return _react2.default.createElement(
        'div',
        { className: 'terra-CollapsibleButtonView', ref: this.setContainer },
        _react2.default.createElement(
          'div',
          { className: 'terra-CollapsibleButtonView-container', ref: this.setContainer },
          visibleChildren.map(function (child, childIndex) {
            var childKey = childIndex;
            return _react2.default.createElement(
              'div',
              { className: 'terra-CollapsibleButtonView-item', key: childKey },
              child
            );
          })
        ),
        toggle
      );
    }
  }]);

  return CollapsibleButtonView;
}(_react2.default.Component);

CollapsibleButtonView.propTypes = propTypes;
CollapsibleButtonView.defaultProps = defaultProps;
CollapsibleButtonView.Item = Item;
CollapsibleButtonView.Group = Group;

exports.default = CollapsibleButtonView;