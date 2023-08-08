import React from "react";
import varunPhoto from "./../../assets/images/varun.jpg";
import "./PokemonCard.css";

function PokemonCard(props) {
  return (
    <div className="pokemon-card">
      <img src={props.details.image} alt="pokemon" />
      <p>{props.details.name}</p>
    </div>
  );
}

export default PokemonCard;
