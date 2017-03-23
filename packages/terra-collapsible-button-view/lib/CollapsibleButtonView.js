'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMeasure = require('react-measure');

var _reactMeasure2 = _interopRequireDefault(_reactMeasure);

require('./CollapsibleButtonView.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  buttonViews: _react.PropTypes.arrayOf(_react.PropTypes.element)
};

var defaultProps = {
  buttonViews: []
};

var CollapsibleButtonView = function (_React$Component) {
  _inherits(CollapsibleButtonView, _React$Component);

  function CollapsibleButtonView(props) {
    _classCallCheck(this, CollapsibleButtonView);

    var _this = _possibleConstructorReturn(this, (CollapsibleButtonView.__proto__ || Object.getPrototypeOf(CollapsibleButtonView)).call(this, props));

    _this.state = { hiddenIndexes: [] };
    return _this;
  }

  _createClass(CollapsibleButtonView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.remeasure(this.state.hiddenIndexes);
    }
  }, {
    key: 'remeasure',
    value: function remeasure() {
      if (!this.itemSelf) {
        return;
      }

      // do calculation here
      var widthToMeasure = this.itemSelf.clientWidth;
      var hiddenIndexes = [];
      var calcWidth = 0;

      for (var i = 0; i < this.props.buttonViews.length; i += 1) {
        if (!this.itemSelf.children[i]) {
          break;
        }
        calcWidth += this.itemSelf.children[i].clientWidth;
        if (calcWidth > widthToMeasure) {
          hiddenIndexes.push(i);
        }
      }

      if (hiddenIndexes.length !== this.state.hiddenIndexes.length) {
        this.setState({ hiddenIndexes: hiddenIndexes });
      }
    }
  }, {
    key: 'visibleButtonViews',
    value: function visibleButtonViews(buttonViews) {
      var cleanButtonViews = [];
      for (var i = 0; i < buttonViews.length; i += 1) {
        if (!this.state.hiddenIndexes.includes(i)) {
          cleanButtonViews.push(buttonViews[i]);
        }
      }
      return cleanButtonViews;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var cleanButtonViews = this.visibleButtonViews(this.props.buttonViews);
      return _react2.default.createElement(
        _reactMeasure2.default,
        { onMeasure: function onMeasure(dimensions) {
            _this2.setState({ hiddenIndexes: [] });_this2.remeasure(dimensions);
          } },
        _react2.default.createElement(
          'div',
          { ref: function ref(a) {
              _this2.itemSelf = a;
            }, className: 'terra-Frame' },
          cleanButtonViews
        )
      );
    }
  }]);

  return CollapsibleButtonView;
}(_react2.default.Component);

CollapsibleButtonView.propTypes = propTypes;
CollapsibleButtonView.defaultProps = defaultProps;

exports.default = CollapsibleButtonView;