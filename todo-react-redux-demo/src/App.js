import React from 'react';
import './App.css';

import { addItem, deleteItem} from './actions/indexAction'
import {connect} from 'react-redux';
import TodoApp from './components/TodoApp'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoApp 
            {...this.props}
            />
        </header>
      </div>
    )
  }

}

const mapStateToProps = state =>  (
  {
    items: state.todos
  }
)

const mapDispatchToProps = dispatch => (
  {
    addItem: text => dispatch(addItem(text)),
    deleteItem: id => dispatch(deleteItem(id))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
