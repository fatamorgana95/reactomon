import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import PokemonDetails from './components/PokemonDetails';


const App = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
      .then((response) => setPokemons(response.data.results));
    axios.get("https://pokeapi.co/api/v2/type")
      .then((response) => setTypes(response.data.results));
  }, []);

  
    return (
      <Router>
        <div className="App">	
            <Navbar />
            <Route exact path="/" render={(props) => (
              <React.Fragment>
                <p>hell mami</p>
              </React.Fragment>
            )} />
            <Route path="/pokemons" render={(props) => (
              <React.Fragment>
                <PokemonList pokemons={pokemons} />
              </React.Fragment>
            )} />
            <Route path="/types" render={(props) => (
              <React.Fragment>
                <TypeList types={types} />
              </React.Fragment>
            )} />
            <Route path="/pokemon" render={(props) => (
              <React.Fragment>
                <PokemonDetails />
              </React.Fragment>
            )} />
        </div>
      </Router>
    );
  }

export default App;