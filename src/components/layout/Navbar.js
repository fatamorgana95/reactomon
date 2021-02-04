import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header style={headerStyle}>
      <p>
        <img
          src="https://i.imgur.com/LWF7HIM.png"
          style={imgStyle}
          alt="pokemon-logo"
        />
      </p>
      <Link style={linkStyle} to="/pokemons">
        Pokemons
      </Link>
      <Link style={linkStyle} to="/types">
        Types
      </Link>
    </header>
  );
}

export default Navbar;

const headerStyle = {
  background: "#051766",
  color: "#fff",
  textAlign: "center",
  padding: "30px",
};

const imgStyle = {
  padding: "30px",
};

const linkStyle = {
  textDecoration: "none",
  background: "#F9C132",
  color: "#051766",
  marginLeft: "110px",
  marginRight: "110px",
  padding: "10px",
  borderRadius: "10%",
  fontWeight: "bold",
};
