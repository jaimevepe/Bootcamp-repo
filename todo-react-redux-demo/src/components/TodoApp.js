import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

import TodoList from './TodoList'
import ShowAll from './ShowAll'

class TodoApp extends Component {

  addItem = event => {
    event.preventDefault();
    if(!this.inputNode.value) return;
    this.props.addItem(this.inputNode.value);
    this.inputNode.value = "";
  }

  render() {

    return (
      <div className="container">
        <h1 className="text-center align-middle mt-3">
          Todo App in React!
        </h1>
        <form onSubmit={this.addItem}>
          <div>
            <input 
              type="text"  
              className="form-control"
              name="todoinput"
              placeholder="Enter Todo"
              ref={node => {
                this.inputNode = node;
              }}
            />
          </div>
          <button className="btn btn-primary" type="submit">Add Todo</button>

        </form>

        <div>
          <TodoList
            items={this.props.items}
            toggleItemCompletion={this.props.toggleItemCompletion}
          />
        </div>

        <div>
          <ShowAll showAll={this.props.showAll}/>
        </div>

    
      </div>
    )
  }
}

export default  TodoApp;