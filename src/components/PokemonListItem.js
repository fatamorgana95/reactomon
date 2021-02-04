import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PokemonListItem = (props) => {
  
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
    .get(props.pokemon.url)
    .then(response => setImage(response.data.sprites.other.dream_world.front_default));
  }, [props.pokemon.url]);

    let url = props.pokemon.url;
    let splitted = url.split("/");
    let id = splitted[splitted.length - 2];
    let link = `/pokemon/${id}`;

    return (
      <li>
        <Link to={link}>
          <img src={image} alt=""/>
          <p>{props.pokemon.name}</p>
        </Link>
      </li>
    );
  }

export default PokemonListItem;