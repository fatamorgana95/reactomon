import React, { useContext } from "react";
import Link from "../../elements/Link";
import Header from "../../elements/Header";
import ToggleButton from "../../elements/ToggleButton";
import { InverseThemeContext } from "../../contexts/InverseThemeContext";

function Navbar() {
  const [inverseTheme, setInverseTheme] = useContext(InverseThemeContext);

  const switchTheme = () => {
    setInverseTheme(!inverseTheme);
  };

  return (
    <Header inverseTheme={inverseTheme}>
      <p>
        <Link to="/" style={noBackground}>
          <img
            src="https://i.imgur.com/LWF7HIM.png"
            style={imgStyle}
            alt="pokemon-logo"
          />
        </Link>
      </p>
      <Link inverseTheme={inverseTheme} to="/pokemons">
        Pokemons
      </Link>
      <Link inverseTheme={inverseTheme} to="/types">
        Types
      </Link>
      <ToggleButton inverseTheme={inverseTheme} onClick={switchTheme}>
        Theme switcher
      </ToggleButton>
    </Header>
  );
}

export default Navbar;

const imgStyle = {
  padding: "30px",
};

const noBackground = {
  background: "none",
};
