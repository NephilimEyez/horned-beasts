import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal 
      show={this.props.showModal} 
      onHide={this.props.handleCloseModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.image_url} alt='' />
          <p>{this.props.description}</p>
        </Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast;