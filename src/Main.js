import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import HornedBeast from './HornedBeast';
import data from './data/data.json';

// Goat picture from rurallivingtoday.com
// Impala picture from wikipedia
// Deer picture I could not figure out it was on a drive I could not figure out who to source.

class Main extends React.Component {
    render() {
        return (
            <main>
                {data.map((animalObj, idx) => {
                    return <HornedBeast key={idx} name={animalObj.title} title={animalObj.keyword} image_url={animalObj.image_url} description={animalObj.description} horns={animalObj.horns} />
                })}
            </main>
        )
    }
}

export default Main;