import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

const TodoItem = ({text}) => (
  <li>{text}</li>
)

class App extends Component {
  constructor(props) { // constructor function is where you initialize state.
    super(props); //this line runs App's parent's constructor (just in case it does something useful)

    this.state = {
      todos: [], //todos is an empty array which is a placeholder in the state for our todos which we will add from the app
      newTodo: '' //newTodo is a placeholder for the text of the todo being added
    };
    this.handleSubmit = this.handleSubmit.bind(this); // to bind to App so it wont be global anymore
    this.handleChange = this.handleChange.bind(this);  // you can use fat arrows in the handle function to not use this bind
  }

  handleChange(event) { // (this) is a function inside a function, so its global, so you need to bind it
    this.setState({[event.target.name]: event.target.value}) //event.target.name is the name="newTodo" in the input
  }                                    // event.target.value is the todo that was inputed.
  // We are using variables here (event.target.name) because we can use this same function in other 
  // input elements as well without the need to edit this function.


  handleSubmit(event) {
    event.preventDefault(); // prevent page from refreshing after a submit
    const todos = [...this.state.todos, this.state.newTodo]; // spread the current todos array while new todos are entered
    this.setState({todos, newTodo: ''}); // appended the new todo to current state / updating state
  }                         // blank '' will clear input after you submit after you add the Value  

  render(){
    const todosList = this.state.todos.map((todo, index) => 
      <TodoItem key={index} text={todo} />
    );

    return (
      <div className="App">
        <h1>Simple Todo</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="todo-input"
            autoComplete="off"
            type="texr"
            name="newTodo"
            placeholder="What needs to be done?"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button type="submit" className="save-button">SAVE</button>
        </form>

        <div className="todo-content">
          <ol>
            {todosList}
          </ol>
        </div>
      </div>
    )
  }
}

export default App;
