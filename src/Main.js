import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    render() {
        return (
            <main>
                {this.props.data.map((animalObj) => {
                    return <HornedBeast 
                    key={animalObj._id} 
                    name={animalObj.title} 
                    title={animalObj.keyword} 
                    image_url={animalObj.image_url} 
                    description={animalObj.description} 
                    horns={animalObj.horns} 
                    handleOpenModal={this.props.handleOpenModal}
                    />
                })}
            </main>
        )
    }
}

export default Main;