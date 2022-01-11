import React, {useState} from "react";
import GetData from "../dataManagement/fetchAPI";
import CharacterCard from "../characterCard/characterCard";

function CharactersList() {

    const [filter, setFilter] = useState('character');
    const [page, setPage] = useState(1);

    const { results } = GetData(filter, page);

    return (
        <div className="col-12 d-flex flex-wrap justify-content-around mt-2">
            {results.map((item , index ) => (
                <CharacterCard character={item} />
            ))}
        </div>
    );
}

export default CharactersList;