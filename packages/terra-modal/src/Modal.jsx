import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Portal from 'react-portal';
import ModalDialog from './ModalDialog';
import './Modal.scss';

const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  beforeClose: PropTypes.func,
  children: PropTypes.node,
  closeOnEsc:  PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  isFullscreen: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onUpdate: PropTypes.func,
  openByClickOn: PropTypes.element,
  role: PropTypes.string,
};

const defaultProps = {
  ariaLabel: null,
  children: null,
  classNameModal: 'terra-Modal',
  classNameOverlay: 'terra-Modal-overlay',
  closeOnEsc: true,
  closeOnOutsideClick: true,
  isFullscreen: false,
  isOpened: false,
  openByClickOn: null,
  role: 'dialog',
};

class Modal extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
           ariaLabel,
           isOpened,
           closeOnEsc,
           closeOnOutsideClick,
           openByClickOn,
           onClose,
           onOpen,
           onUpdate,
           beforeClose,
           classNameModal,
           classNameOverlay,
           role,
           ...customProps} = this.props;


    return (
        <Portal isOpened={isOpened}
                closeOnEsc={this.props.closeOnEsc}
                closeOnOutsideClick={this.props.closeOnOutsideClick}
                openByClickOn={this.props.openByClickOn}
                onClose={this.props.onClose}
                onOpen={this.props.onOpen}
                onUpdate={this.props.onUpdate}
                beforeClose={this.props.beforeClose}
        >
          <ModalDialog
            classNameModal={classNameModal}
            classNameModal={classNameOverlay}
            role={role}
          >
            {this.props.children}
          </ModalDialog>
        </Portal>
    );
  }
}
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

 export default Modal;