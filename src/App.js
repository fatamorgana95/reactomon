import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetails from "./components/PokemonDetails";
import CardContainer from "./elements/CardContainer";
import Card from "./elements/Card";
import UnorderedList from "./elements/UnorderedList";
import BandImage from "./elements/BandImage";
import { InverseThemeProvider } from "./contexts/InverseThemeContext";

const App = (props) => {
  return (
    <InverseThemeProvider>
      <Router>
        <Navbar />
        <CardContainer>
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <BandImage
                  alt="the-band"
                  src="https://www.nicepng.com/png/full/183-1838504_we-baby-pokemon-gen-1.png"
                />
              </React.Fragment>
            )}
          />
          <Route
            path="/types"
            render={(props) => (
              <React.Fragment>
                <Card>
                  <UnorderedList>
                    <TypeList />
                  </UnorderedList>
                </Card>
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
            path="/pokemon/:id"
            render={(props) => (
              <React.Fragment>
                <PokemonDetails />
              </React.Fragment>
            )}
          />
        </CardContainer>
      </Router>
    </InverseThemeProvider>
  );
};

export default App;
