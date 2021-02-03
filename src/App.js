import './App.css';
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';


class App extends Component{
  render() {
    return (
      <div className="App">
        <div className="Container">
          <Navbar />
          <h1>hell mami</h1>
        </div>
      </div>
    );
  }
}

export default App;
