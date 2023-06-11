import React from 'react';
import Form from 'react-bootstrap/Form';
import './Header.css';

class Header extends React.Component {
    render(){
        return (
        <header>
            <h1>Horned Beasts</h1>
            <Form.Select onChange={this.props.handleSelect} aria-label="Default select example">
                <option value="all">All</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">One-Hundred</option>
            </Form.Select>
        </header>    
    )}
}

export default Header;