import React from "react";
import GetData from "../dataManagement/fetchAPI";

function CommonList({ filter, page }) {

    const { results } = GetData(filter, page);

    return (
        <div className="col-12 d-flex flex-wrap justify-content-around mt-2">
            {results.map((item, index) => (
                <p>{item.name}</p>
            ))}
        </div>
    );
}

export default CommonList;