import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Knight from './components/knight';
import Square from './components/square';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Square black>
          <Knight />
        </Square>
      </div>
    );
  }
}

export default App;
