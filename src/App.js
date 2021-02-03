import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import PokemonList from './components/PokemonList'


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
            <Route path="/pokemons" component={PokemonList} />
            <Route path="/types"  />
        </div>
      </Router>
    );
  }
}

export default App;