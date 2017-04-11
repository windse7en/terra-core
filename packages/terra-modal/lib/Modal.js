'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactPortal = require('react-portal');

var _reactPortal2 = _interopRequireDefault(_reactPortal);

var _ModalDialog = require('./ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Modal.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  ariaLabel: _react.PropTypes.string.isRequired,
  beforeClose: _react.PropTypes.func,
  children: _react.PropTypes.node.isRequired,
  classNameModal: _react.PropTypes.string,
  classNameOverlay: _react.PropTypes.string,
  closeOnEsc: _react.PropTypes.bool,
  closeOnOutsideClick: _react.PropTypes.bool,
  isFullscreen: _react.PropTypes.bool,
  isOpened: _react.PropTypes.bool,
  onClose: _react.PropTypes.func,
  onOpen: _react.PropTypes.func,
  onUpdate: _react.PropTypes.func,
  openByClickOn: _react.PropTypes.element,
  role: _react.PropTypes.string
};

var defaultProps = {
  ariaLabel: null,
  children: null,
  classNameModal: null,
  classNameOverlay: null,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  isFullscreen: false,
  isOpened: false,
  openByClickOn: null,
  role: 'dialog'
};

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          ariaLabel = _props.ariaLabel,
          beforeClose = _props.beforeClose,
          classNameModal = _props.classNameModal,
          classNameOverlay = _props.classNameOverlay,
          closeOnEsc = _props.closeOnEsc,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          isFullscreen = _props.isFullscreen,
          isOpened = _props.isOpened,
          onClose = _props.onClose,
          onOpen = _props.onOpen,
          onUpdate = _props.onUpdate,
          openByClickOn = _props.openByClickOn,
          role = _props.role,
          customProps = _objectWithoutProperties(_props, ['ariaLabel', 'beforeClose', 'classNameModal', 'classNameOverlay', 'closeOnEsc', 'closeOnOutsideClick', 'isFullscreen', 'isOpened', 'onClose', 'onOpen', 'onUpdate', 'openByClickOn', 'role']);

      var modalClassName = (0, _classnames2.default)(['terra-Modal', { 'terra-Modal--fullscreen': isFullscreen }, classNameModal]);

      var overlayClassName = (0, _classnames2.default)(['terra-Modal-overlay', classNameOverlay]);

      return _react2.default.createElement(
        _reactPortal2.default,
        {
          isOpened: isOpened,
          closeOnEsc: this.props.closeOnEsc,
          closeOnOutsideClick: closeOnOutsideClick,
          openByClickOn: this.props.openByClickOn,
          onClose: onClose,
          onOpen: onOpen,
          onUpdate: onUpdate,
          beforeClose: beforeClose
        },
        _react2.default.createElement(
          _ModalDialog2.default,
          {
            closeOnOutsideClick: closeOnOutsideClick,
            ariaLabel: ariaLabel,
            classNameModal: modalClassName,
            classNameOverlay: overlayClassName,
            role: role
          },
          this.props.children
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

exports.default = Modal;