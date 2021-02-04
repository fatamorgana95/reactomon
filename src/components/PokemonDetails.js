import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Stats from "./Stats";

const PokemonDetails = (props) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [experience, setExperience] = useState(0);
  const [stats, setStats] = useState([]);
  const { id } = useParams();
  const link = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  useEffect(() => {
    axios
      .get(link)
      .then(
        (response) =>
          setImage(response.data.sprites.other.dream_world.front_default) +
          setName(response.data.name) +
          setExperience(response.data.base_experience) +
          setStats(response.data.stats)
      );
  }, [link]);

  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>experience: {experience}</p>
      <Stats stats={stats} id={id} />
    </div>
  );
};

export default PokemonDetails;
