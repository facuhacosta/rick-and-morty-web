import React from "react";
import CharacterDetails from "../characterDetails/characterDetails";

function CharacterCard({ character }) {
    return (
        <div className="card mb-4 mx-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={character.image} alt="Card cap" />
            <CharacterDetails character={character} />
        </div>
    );
}

export default CharacterCard;