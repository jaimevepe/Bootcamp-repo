import React, { Component } from 'react';

class FeelingsList extends Component {
    render(){
        const theStyles = {fontSize: "24px"};
        return (
            <div>
            <h3>Hows does he feel?</h3>
            <ul style={theStyles}> 
                <li>Happy</li>
                <li>Sad</li>
           </ul>
           </div>
        );
    }
}

export default FeelingsList;