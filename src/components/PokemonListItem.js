import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PokemonListItem = (props) => {
  const [image, setImage] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    axios
      .get(props.pokemon.url)
      .then(
        (response) =>
          setImage(response.data.sprites.other.dream_world.front_default) +
          setId(response.data.id)
      );
  }, [props.pokemon.url]);

  return (
    <li>
      <Link to={`pokemon/${id}`}>
        <img src={image} alt="poke" />
        <p>{props.pokemon.name}</p>
      </Link>
    </li>
  );
};

export default PokemonListItem;
