import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import data from './data/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      modalTitle: ''
    }
  }

  handleOpenModal = title => {
    this.setState({
      showModal: true,
      modalTitle: title
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
      <Header />
      <Main handleOpenModal={this.handleOpenModal}
      data={data}
      />
      <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Test</Modal.Title>
        </Modal.Header>
      </Modal>
      <Footer />
      </>
    )
  }
}

export default App;