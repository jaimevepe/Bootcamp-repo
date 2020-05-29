import React, { Component } from 'react';
import './index.css'; 
import FeelingsList from './FeelingsList';

class Garfield extends Component {
    render() {
        const theStyles = {fontSize: "24px"};
        return (
            <div className="theimage">
                <h1 className="name">Life</h1>
                <img src="https://i.imgur.com/F67Eq7J.jpeg" />
                <FeelingsList />
            </div>
            );
    }
}


export default Garfield;
