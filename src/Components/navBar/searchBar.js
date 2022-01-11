import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SearchBar() {
    return (
        <div className="w-6 h-6 flex text-gray-400 items-center">
        <input className="border-2 rounded-2xl border-gray-400 text-lg pl-2 pr-6 focus:outline-none" type="text" placeholder="Search" aria-label="Search" />
            <button className="color-red-100 relative right-6" type="submit">
              <FontAwesomeIcon icon='search' />
            </button>
        </div>
    );
}

export default SearchBar;