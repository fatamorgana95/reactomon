import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetails from "./components/PokemonDetails";
import CardContainer from "./elements/CardContainer";
import Card from "./elements/Card";

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <CardContainer>
          <Card>
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
              path="/types"
              render={(props) => (
                <React.Fragment>
                  <ul style={listStyle}>
                    <TypeList />
                  </ul>
                </React.Fragment>
              )}
            />
          </Card>
          <Route
            path="/pokemons"
            render={(props) => (
              <React.Fragment>
                <PokemonList />
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
        </CardContainer>
      </div>
    </Router>
  );
};

export default App;

const listStyle = {
  listStyle: "none",
  textAlign: "left",
  paddingLeft: "30%",
  fontSize: "large",
};
