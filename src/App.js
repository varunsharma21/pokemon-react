import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Pokemon from "./Components/Pokemon/PokemonCard";
import PokemonCard from "./Components/Pokemon/PokemonCard";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemonHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      );

      if (!response.ok) {
        throw Error("Something Went Wrong :/");
      }

      const data = await response.json();

      const transformedPokemon = data.pokemon.map((pokemon) => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.img,
        };
      });

      setPokemons(transformedPokemon);
      console.log(pokemons[0]);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPokemonHandler();
  }, [fetchPokemonHandler]);

  let content = <h2>No pokemon to show.</h2>;

  // For getting pokemons by their id.
  // const pokemonById = pokemons.filter((pokemon) => pokemon.id === 4);

  if (pokemons.length > 0) {
    content = pokemons.map((pokemon) => <PokemonCard details={pokemon} />); // Passing pokemonById array for showing pokemons id wise.
  }

  if (isLoading) {
    content = <h2>Loading...</h2>;
  }

  if (error) {
    content = <h2>{error}</h2>;
  }

  return <div className="container">{content}</div>;
}

export default App;
