import styled from "styled-components";
import { InverseThemeContext } from "../contexts/InverseThemeContext";
import React, { useContext } from "react";

const CardContainer = (props) => {
  const [inverseTheme, setInverseTheme] = useContext(InverseThemeContext);

  const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-image: ${
    inverseTheme
      ? "url('https://www.teahub.io/photos/full/95-955144_cartoon.jpg')"
      : "url('https://i0.wp.com/www.privateschoolsstatenisland.com/wp-content/uploads/2017/11/free-dark-blue-background-wallpapers-gallery-4.jpeg?ssl=1')"
  };
  background-image: 
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;
  background-size: 100%;
`;

  return <StyledContainer>{props.children}</StyledContainer>;
};

export default CardContainer;
