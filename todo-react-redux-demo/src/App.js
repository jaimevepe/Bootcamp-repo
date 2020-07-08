import React from 'react';
import './App.css';

import { addItem, deleteItem, toggleItemCompletion, updateSearch, showAll} from './actions/indexAction'
import {connect} from 'react-redux';
import TodoApp from './components/TodoApp'
import SearchBox from './components/SearchBox';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoApp 
            {...this.props}
            />
            <br />
            <SearchBox updateSearch={this.props.updateSearch}/>
        </header>
      </div>
    )
  }

}

const mapStateToProps = state =>  (
  {
    items: state.todos
      .filter( t => t.text.toLowerCase().includes(state.searchText.toLowerCase()))
      .filter( t => state.showAll || !t.isComplete)
  }
)

const mapDispatchToProps = dispatch => (
  {
    addItem: text => dispatch(addItem(text)),
    deleteItem: id => dispatch(deleteItem(id)),
    toggleItemCompletion: id => dispatch(toggleItemCompletion(id)),
    updateSearch: text => dispatch(updateSearch(text)),
    showAll: () => dispatch(showAll())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
