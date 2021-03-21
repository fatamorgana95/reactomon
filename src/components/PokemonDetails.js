import React from "react";
import { useParams } from "react-router-dom";
import Card from "../elements/Card";
import { useHttp } from "../hooks/Http";
import Stats from "./Stats";

const PokemonDetails = () => {
  const { id } = useParams();
  const link = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  const [isLoading, fetchedData] = useHttp(link, []);

  const pokemonDetails = fetchedData
    ? {
        image: fetchedData.data.sprites.other.dream_world.front_default,
        name: fetchedData.data.name,
        experience: fetchedData.data.base_experience,
        stats: fetchedData.data.stats,
      }
    : [];

  if (isLoading && fetchedData) {
    return (
      <Card>
        <img src={pokemonDetails.image} alt={pokemonDetails.name} />
        <p>{pokemonDetails.name}</p>
        <p>experience: {pokemonDetails.experience}</p>
        <Stats stats={pokemonDetails.stats} id={id} />
      </Card>
    );
  } else {
    return (
      <div>
        <p>Getting Pokemon..</p>
      </div>
    );
  }
};

export default PokemonDetails;
