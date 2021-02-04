import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetails from "./components/PokemonDetails";

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <p>hell mami</p>
            </React.Fragment>
          )}
        />
        <Route
          path="/pokemons"
          render={(props) => (
            <React.Fragment>
              <PokemonList />
            </React.Fragment>
          )}
        />
        <Route
          path="/types"
          render={(props) => (
            <React.Fragment>
              <TypeList />
            </React.Fragment>
          )}
        />
        <Route
          path="/pokemon/:id"
          render={(props) => (
            <React.Fragment>
              <PokemonDetails />
            </React.Fragment>
          )}
        />
      </div>
    </Router>
  );
};

export default App;
