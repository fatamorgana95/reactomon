import React from "react";
import { useHttp } from "../hooks/Http";
import { Link } from "react-router-dom";

const PokemonListItem = (props) => {
  const [isLoading, fetchedData] = useHttp(props.pokemon.url, []);

  const pokemon = fetchedData
    ? {
        image: fetchedData.data.sprites.other.dream_world.front_default,
        id: fetchedData.data.id,
      }
    : [];

  if (isLoading && fetchedData) {
    return (
      <li>
        <Link to={`pokemon/${pokemon.id}`}>
          <img src={pokemon.image} alt="poke" />
          <p>{props.pokemon.name}</p>
        </Link>
      </li>
    );
  } else {
    return (
      <div>
        <p>Getting pokemon..</p>
      </div>
    );
  }
};

export default PokemonListItem;
