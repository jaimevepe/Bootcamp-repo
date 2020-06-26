import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

export const randNum = () => Math.floor(Math.random()*colors.length);

export const randColor = (colors, randNum) => colors[randNum()];


function App() {
  // useState Hook
  const [backgroundColor, setBackgroundcolor] = useState('purple') // purple to backgroundcolor

  const theStyles = {
    backgroundColor: backgroundColor
  }

  const handleClick = () => {
    let backgroundColor = randColor(colors, randNum)
    setBackgroundcolor(backgroundColor)
  }

  return (
    <div className="App" data-test='app-component' style={theStyles}>
      <h1>Hello</h1>
      <button onClick={handleClick}>Click ME!</button>
    </div>
  );
}

export default App;
