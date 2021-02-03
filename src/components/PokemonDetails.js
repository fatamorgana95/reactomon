import React, { Component } from "react";
import axios from "axios";

export class PokemonDetails extends Component {
    state = {
        abilities: [],
        picture: "",
        name: "",
        id: ""
    }

  componentDidMount() {
    let path = window.location.pathname;
    let id = path.split("/")[path.split("/").length - 1];
    this.setState({id: id});
    let link = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    axios.get(link)
    .then(response => this.setState({
        abilities: response.data.abilities,
        picture: response.data.sprites.other.dream_world.front_default,
        name: response.data.forms[0].name
      })
    );
  }

  render() {
    return (
    <div>
        <img src={this.state.picture} alt=""/>
        <p>{this.state.name}</p>
    </div>
    
    );
}
}

export default PokemonDetails;