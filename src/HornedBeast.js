import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';


class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            likes: 0,
            fav: false
        }
    }
    
    favorite = () => {
        this.setState({
            fav: true
        })
    }

    unFavorite = () => {
        this.setState({
            fav: false
        })
    }

    favHandler = () => {
        if(this.state.fav === true){
            return <p onClick={this.unFavorite} className='click'>💔 Unfavorite me.</p>
        } else {
            return <p onClick={this.favorite} className='click'>❤️ Favorite me!</p>
        }
    }

    liked = () => {
        this.setState({
            likes: this.state.likes +1
        })
    }

    handlePassName = (event) => {
        this.props.handleOpenModal(event)
    }

    render(){
        return (
            <>
            <article className={this.state.fav ? 'favorite' : ''}>
                <h2>{this.props.name}</h2>
                <div>
                    <p className='click' onClick={this.liked}>👍 Like me!</p>
                    {this.favHandler()}
                </div>
                <img onClick={this.handlePassName} title={this.props.title} alt={this.props.description} src={this.props.image_url} />
                <p>Liked: {this.state.likes} times</p>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{this.props.title}</Accordion.Header>
                        <Accordion.Body>{this.props.description}</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </article>
            </>
        )
    }
}

export default HornedBeast;