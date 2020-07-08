import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';


class SearchBox extends Component {
  handleChange = event => {
    this.props.updateSearch(event.target)
  }
    render() {
        return (
          <div>
            <label>
              Search For Todos
            </label>
            <br />
            <input 
              type='text' 
              placeholder="Search for Todos"
              className="" 
              onChange={this.handleChange}
              />
          </div>
        )
    }
}

export default SearchBox