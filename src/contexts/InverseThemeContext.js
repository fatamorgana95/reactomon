import React, { useState, createContext } from "react";

export const InverseThemeContext = createContext();

export const InverseThemeProvider = (props) => {
  const [inverseTheme, setInverseTheme] = useState(false);

  return (
    <InverseThemeContext.Provider value={[inverseTheme, setInverseTheme]}>
      {props.children}
    </InverseThemeContext.Provider>
  );
};
