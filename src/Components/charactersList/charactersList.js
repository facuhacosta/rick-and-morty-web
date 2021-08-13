import React, {useState} from "react";
import GetData from "../dataManagement/fetchAPI";

function CharactersList() {

    const [filter, setFilter] = useState('character');
    const [page, setPage] = useState(1);

    const { results } = GetData(filter, page);

    return (
        <div className="col-12 d-flex flex-wrap justify-content-around mt-2">
            {results.map((item , index ) => (
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={item.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="card-title">Last Known Location:</h6>
                        <p className="card-text">{item.location.name}</p>
                        <h6 className="card-title">Origin:</h6>
                        <p className="card-text">{item.origin.name}</p>
                        <a href="#" className="btn btn-primary">More</a>
                        {console.log(item)}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CharactersList;