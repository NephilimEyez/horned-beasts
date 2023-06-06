import React from 'react';


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
            return <p onClick={this.unFavorite}>💔 Unfavorite me.</p>
        } else {
            return <p onClick={this.favorite}>❤️ Favorite me!</p>
        }
    }

    liked = () => {
        this.setState({
            likes: this.state.likes +1
        })
    }

    render(){
        return (
            <>
            <article className={this.state.fav ? 'favorite' : ''}>
                <h2>{this.props.name}</h2>
                <div>
                    <p onClick={this.liked}>👍 Like me!</p>
                    {this.favHandler()}
                </div>
                <img title={this.props.title} alt={this.props.description} src={this.props.image_url} />
                <p>Liked: {this.state.likes} times</p>
            </article>
            </>
        )
    }
}

export default HornedBeast;