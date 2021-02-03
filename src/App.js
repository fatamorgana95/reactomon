import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';


class App extends Component{
  render() {
    return (
      <Router>
        <div className="App">	
            <Navbar />
            <Route exact path="/" render={(props) => (
              <React.Fragment>
                <p>main page</p>
              </React.Fragment>
            )} />
            <Route path="/pokemons" />
            <Route path="/types"  />
        </div>
      </Router>
    );
  }
}

export default App;
