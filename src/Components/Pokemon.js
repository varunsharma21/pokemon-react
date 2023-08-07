import React from "react";

function Pokemon(props) {
  return (
    <div>
      {props.pokemons.map((pokemon) => (
        <h2>{pokemon.name}</h2>
      ))}
    </div>
  );
}

export default Pokemon;
