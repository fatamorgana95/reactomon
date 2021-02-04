import React from "react";
import { useHttp } from "../hooks/Http";

const TypeList = (props) => {
  const [isLoading, fetchedData] = useHttp(
    "https://pokeapi.co/api/v2/type",
    []
  );

  const types = fetchedData
    ? {
        types: fetchedData.data.results,
      }
    : [];

  if (isLoading && fetchedData) {
    return types.types.map((type) => <li key={type.url}>{type.name}</li>);
  } else {
    return (
      <div>
        <p>Getting types..</p>
      </div>
    );
  }
};

export default TypeList;
