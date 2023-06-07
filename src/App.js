import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import data from './data/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      ...data.map((animalObj) => {
        return <>
          key: {animalObj._id} 
          name: {animalObj.title} 
          title: {animalObj.keyword} 
          image_url: {animalObj.image_url} 
          description: {animalObj.description} 
          horns: {animalObj.horns}
        </>
      })
    }
  }

  handleOpenModal = (title, image_url, description) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description
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
      <SelectedBeast 
      title={this.state.title}
      showModal={this.state.showModal}
      handleCloseModal={this.handleCloseModal}
      image_url={this.state.image_url}
      description={this.state.description}
      />
      <Footer />
      </>
    )
  }
}

export default App;