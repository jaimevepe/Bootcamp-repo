import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';

class App extends Component{
  render() {
    return (
    <Router>
      <div className="App">
       <div className="container">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <hr/>

        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

       </div>

     </div>
    </Router> 
    )
  }
}
export default App;
