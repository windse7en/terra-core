import React from 'react';
import Modal from '../../../../terra-modal/src/Modal';

class ModalDefault extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpened: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

 handleOpenModal() {
  this.setState({ isOpened: true });
 }

 handleCloseModal() {
  this.setState({ isOpened: false });
 }

 render() {
    return (
      <div>
      <Modal
        ariaLabel="Terra Modal"
        isOpened={this.state.isOpened}
        classNameModal={'appended-modal-class'}
        classNameOverlay={'appended-overlay-class'}
      >
        <div>
          <h1>Terra Modal</h1>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </div>
      </Modal>
      <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}


export default ModalDefault;

