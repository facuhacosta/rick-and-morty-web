import React from "react";
import { Link } from "react-router-dom";


function CharacterDetails({ character }) {

    return (
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <h6 className="card-title">Last Known Location:</h6>
        <p className="card-text">{character.location.name}</p>
        <h6 className="card-title">Origin:</h6>
        <p className="card-text">{character.origin.name}</p>
        <Link className="btn btn-primary" to={{ pathname: `/details/${character.name}`, params: "hola" }} >More</Link>
      </div>
    );
}

export default CharacterDetails;