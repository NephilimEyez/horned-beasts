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
      sortedData: data,
    }
  }

  handleOpenModal = (event) => {
    this.setState({
      showModal: true,
      title: data.filter(element => element.keyword === event.target.title)[0].title,
      image_url: data.filter(element => element.keyword === event.target.title)[0].image_url,
      description: data.filter(element => element.keyword === event.target.title)[0].description
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleSelect = (event) => {
    let selected = event.target.value;
  
    if(selected === '1'){
      let newData = data.filter(element => element.horns === 1);
      this.setState({
        sortedData: newData
      })
    } else if(selected === '2') {
      let newData = data.filter(element => element.horns === 2);
      this.setState({
        sortedData: newData
      })
    } else if(selected === '3') {
      let newData = data.filter(element => element.horns === 3);
      this.setState({
        sortedData: newData
      })
    } else if(selected === '100') {
      let newData = data.filter(element => element.horns === 100);
      this.setState({
        sortedData: newData
      })
    } else if(selected === 'all') {
      this.setState({
        sortedData: data
      })
    }
  }

  render() {
    return (
      <>
      <Header handleSelect={this.handleSelect} />
      <Main handleOpenModal={this.handleOpenModal}
      data={this.state.sortedData}
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