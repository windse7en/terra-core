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

var _CollapsibleButtonItem = require('./CollapsibleButtonItem');

var _CollapsibleButtonItem2 = _interopRequireDefault(_CollapsibleButtonItem);

var _CollapsibleButtonGroup = require('./CollapsibleButtonGroup');

var _CollapsibleButtonGroup2 = _interopRequireDefault(_CollapsibleButtonGroup);

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

  _createClass(CollapsibleButtonView, null, [{
    key: 'childFromIndexPath',
    value: function (_childFromIndexPath) {
      function childFromIndexPath(_x, _x2) {
        return _childFromIndexPath.apply(this, arguments);
      }

      childFromIndexPath.toString = function () {
        return _childFromIndexPath.toString();
      };

      return childFromIndexPath;
    }(function (children, indexPath) {
      var child = children[indexPath.pop()];

      return childFromIndexPath(children[indexPath.pop()], indexPath);
    })
  }, {
    key: 'getSelectedItems',
    value: function getSelectedItems(children) {
      var selectedItems = [];
      for (var i = 0; i < children.length; i += 1) {
        if (children[i].props.children) {
          selectedItems.push(getSelectedValues(sub[i].props.children));
        } else {
          return children[i].props.isSelected;
        }
      }
      return selectedItems;
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState(children) {
      var selectedItems = getSelectedItems(children);
      return { hiddenIndexes: [], selectedItems: selectedItems, toggleOpen: false };
    }
  }]);

  function CollapsibleButtonView(props) {
    _classCallCheck(this, CollapsibleButtonView);

    var _this = _possibleConstructorReturn(this, (CollapsibleButtonView.__proto__ || Object.getPrototypeOf(CollapsibleButtonView)).call(this, props));

    _this.state = getInitialState(_this.props.children);
    _this.setContainer = _this.setContainer.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.toggleButton = _react2.default.createElement(_terraButton2.default, { text: '\u2026', onClick: _this.handleToggle });
    return _this;
  }

  _createClass(CollapsibleButtonView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.container) {
        this.resizeObserver = new _resizeObserverPolyfill2.default(function (entries) {
          _this2.setState({ hiddenIndexes: [], selectedIndexes: _this2.state.selectedIndexes, toggleOpen: _this2.state.toggleOpen });
          _this2.forceUpdate();
          _this2.handleResize(entries[0].contentRect.width);
        });
        this.resizeObserver.observe(this.container);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.container) {
        this.resizeObserver.disconnect(this.container);
        this.container = null;
      }
    }
  }, {
    key: 'setContainer',
    value: function setContainer(node) {
      if (node === null) {
        return;
      } // Ref callbacks happen on mount and unmount, element will be null on unmount
      this.container = node;
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle() {
      this.setState({ toggleOpen: !this.toggleOpen, hiddenIndexes: this.state.hiddenIndexes, selectedIndexes: this.state.selectedIndexes });
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
        this.setState({ toggleOpen: false, hiddenIndexes: hiddenIndexes, selectedIndexes: this.state.selectedIndexes });
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
    key: 'hiddenChildComponents',
    value: function hiddenChildComponents(children) {
      var indexes = this.state.hiddenIndexes;
      var hiddenChildren = [];
      for (var i = 0; i < indexes.length; i += 1) {
        hiddenChildren.push(children[indexes[i]]);
      }
      return hiddenChildren;
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick(event, index) {
      var shouldDismiss = this.children[index].isHidden === true; //needs to be advanced
      if (this.state.toggleOpen && shouldDismiss) {
        this.setState({ toggleOpen: false, hiddenIndexes: this.state.hiddenIndexes, selectedIndexes: this.state.selectedIndexes });
      }
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange(event, index) {
      var selectedIndexes = this.state.selectedIndexes; //need to be advanced
      this.setState({ toggleOpen: this.state.toggleOpen, hiddenIndexes: this.state.hiddenIndexes, selectedIndexes: selectedIndexes });
    }
  }, {
    key: 'wrapOnClick',
    value: function wrapOnClick(item) {
      var _this3 = this;

      var onClick = item.props.onClick;
      return function (event) {
        _this3.handleOnClick(event);

        if (onClick) {
          onClick(event);
        }
      };
    }
  }, {
    key: 'wrapOnChange',
    value: function wrapOnChange(item, index) {
      var _this4 = this;

      var onChange = item.props.onChange;
      return function (event) {
        _this4.handleOnChange(event, index);

        if (onChange) {
          onChange(event);
        }
      };
    }
  }, {
    key: 'wrapChildComponents',
    value: function wrapChildComponents(children, indexPath) {
      var _this5 = this;

      children.map(function (child, i) {
        var newProps = {};
        indexPath.push(i);

        if (_this5.props.children[child].type.displayName !== 'CollapsibleButtonGroup') {
          newProps.onChange = _this5.wrapOnChange(child);
        } else {
          newProps.onClick = _this5.wrapOnClick(child);
        }

        if (_this5.child.children.length > 0) {
          _this5.wrapChildComponents(_this5.child.children, i);
        }
        // let onClick;
        // if (isSelectable) {
        //   onClick = this.wrapOnClick(child, i);
        // } else {
        //   onClick = child.props.onClick;
        // }
        // // recursive wrapped shit

        return _react2.default.cloneElement(child, {
          onClick: onClick,
          isSelected: _this5.state.selectedIndex === i
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          alignment = _props.alignment,
          customProps = _objectWithoutProperties(_props, ['children', 'alignment']);

      var listClassNames = (0, _classnames2.default)(['terra-CollapsibleButtonView', _defineProperty({}, 'terra-CollapsibleButtonView-' + alignment, alignment), customProps.className]);

      var wrappedChildren = this.wrapChildComponents(children, []);
      var visibleChildren = this.visibleChildComponents(wrappedChildren);
      var hiddenChildren = this.hiddenChildComponents(wrappedChildren);

      var toggle = void 0;
      if (hiddenChildren.length > 0) {
        toggle = this.toggleButton;
      }

      var hiddenSection = void 0;
      if (this.state.toggleOpen) {
        hiddenSection = _react2.default.createElement(
          'div',
          { className: 'terra-CollapsibleButtonView-hiddenArea' },
          hiddenChildren
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'terra-CollapsibleButtonView' },
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
        _react2.default.createElement(
          'div',
          { className: 'terra-CollapsibleButtonView-toggle' },
          toggle
        )
      );
    }
  }]);

  return CollapsibleButtonView;
}(_react2.default.Component);

CollapsibleButtonView.propTypes = propTypes;
CollapsibleButtonView.defaultProps = defaultProps;
CollapsibleButtonView.Item = _CollapsibleButtonItem2.default;
CollapsibleButtonView.Group = _CollapsibleButtonGroup2.default;

exports.default = CollapsibleButtonView;