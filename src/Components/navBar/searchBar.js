import React from 'react';

function SearchBar() {
    return (
        <form className="form-inline my-lg-0 col-md-9 col-9 p-0">
            <input className="form-control mr-2 col-8" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    );
}

export default SearchBar;