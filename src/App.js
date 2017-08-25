import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Knight from './components/knight';
// import Square from './components/square';
import Board from './components/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board knightPosition={[0, 0]}/>
      </div>
    );
  }
}

export default App;
