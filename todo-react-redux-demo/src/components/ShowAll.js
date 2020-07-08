import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

class ShowAll extends Component {

    render() {
        return (
            <div>
              <label>
                Show all todos: 
                <input 
                    type='checkbox' 
                    onChange={this.props.showAll}
                    />
              </label>
            </div>
        )
    }
}

export default ShowAll;