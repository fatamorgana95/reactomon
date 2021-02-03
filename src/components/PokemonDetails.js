import React, { Component } from "react";
import axios from "axios";
import Stats from './Stats'

export class PokemonDetails extends Component {
    state = {
        picture: "",
        name: "",
        id: "",
        baseExperience: 0,
        stats: []

    }

  componentDidMount() {
    let path = window.location.pathname;
    let id = path.split("/")[path.split("/").length - 1];
    this.setState({id: id});
    let link = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    axios.get(link)
    .then(response => this.setState({
        picture: response.data.sprites.other.dream_world.front_default,
        name: response.data.name,
        baseExperience: response.data.base_experience,
        stats: response.data.stats
      })
    );
  }

  render() {
    return (
    <div>
        <img src={this.state.picture} alt=""/>
        <p>{this.state.name}</p>
        <p>experience: {this.state.baseExperience}</p>
        <Stats stats={this.state.stats} id={this.state.id} />
    </div>
    
    );
}
}

export default PokemonDetails;