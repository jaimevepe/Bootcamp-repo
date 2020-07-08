import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';


class TodoList extends Component {
    render() {
      // console.log('My Props are: ', this.props)
        return (
          <div>
            {
            this.props.items.map(
              t => { 
                const isCompleteStyle = t.isComplete ? {textDecoration: 'line-through', color: 'gray'} : {};
                return <li 
                  key={t.id}
                  style={isCompleteStyle}
                  className="todoItem"
                  onClick={() => {this.props.toggleItemCompletion(t.id)}}
                  >
                  {t.text}
                  </li>
              }
            )
          }
          </div>
        )
    }
}

export default TodoList;