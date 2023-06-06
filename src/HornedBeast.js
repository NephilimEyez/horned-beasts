import React from 'react';

class HornedBeast extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            likes: 0,
            fav: false
        }
    }
    render(){
        return (
            <>
            <article>
                <img title={this.props.title} alt={this.props.description} src={this.props.image_url} />
            </article>
            </>
        )
    }
}

export default HornedBeast;