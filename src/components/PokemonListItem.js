import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class PokemonListItem extends Component {
  state = {
    image: ""
  }


  componentDidMount() {
    axios
        .get(this.props.pokemon.url)
        .then(response => this.setState({ 
            image : response.data.sprites.other.dream_world.front_default 
        }))
  }

  render() {
    let url = this.props.pokemon.url;
    let splitted = url.split("/");
    let id = splitted[splitted.length - 2];
    let link = `/pokemon/${id}`;

    return (
      <li>
        <Link to={link}>
          <img src={this.state.image} alt=""/>
          <p>{this.props.pokemon.name}</p>
        </Link>
      </li>
    );
  }
}

export default PokemonListItem;