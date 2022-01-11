import React from "react";
import SearchBar from "./searchBar";
import Selector from "./filterSelector";
import NavItems from "./navItems";
import Toggler from "./navToggler";

function Navigation() {
    return (
        <nav className="bg-white-400 w-h h-16 px-4 flex items-center justify-between shadow-md rounded-b">
            <img className='rounded-full w-12 tablet:w-14 h-12 tablet:h-14' src="rick1.jpg" alt="logo"/>
            <div className="d-flex w-h h-6" >
                <SearchBar />
                {/* <Selector /> */}
            </div>
            <NavItems /> 
            <Toggler />
        </nav>
    );
}

export default Navigation;
