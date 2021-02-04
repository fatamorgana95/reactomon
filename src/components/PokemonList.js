import React from "react";
import { useHttp } from "../hooks/Http";
import PokemonListItem from "./PokemonListItem";

const PokemonList = (props) => {
  const [isLoading, fetchedData] = useHttp(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100",
    []
  );

  const pokemons = fetchedData
    ? {
        pokemons: fetchedData.data.results,
      }
    : [];

  if (isLoading && fetchedData) {
    return pokemons.pokemons.map((pokemon) => (
      <PokemonListItem key={pokemon.url} pokemon={pokemon} />
    ));
  } else {
    return (
      <div>
        <p>Getting Pokemons..</p>
      </div>
    );
  }
};

export default PokemonList;
