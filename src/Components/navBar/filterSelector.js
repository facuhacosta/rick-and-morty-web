import React, { useState } from 'react';

function Selector() {

    const [value , setValue] = useState('Caracters');

    // Changes the selector text to show the selected option
    const handleValueChange = e => {
        setValue(e.target.innerText);
    }

    return (
        <div className="dropdown d-flex align-items-center">
            <p className="nav-link dropdown-toggle m-0 p-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {value}
            </p>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <p className="dropdown-item" onClick={handleValueChange} >Characters</p>
                <p className="dropdown-item" onClick={handleValueChange} >Episodes</p>
                <p className="dropdown-item" onClick={handleValueChange} >Locations</p>
            </div>
        </div>
    );
}

export default Selector;