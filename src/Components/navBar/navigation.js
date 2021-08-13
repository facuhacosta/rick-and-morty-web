import React from "react";
import SearchBar from "./searchBar";
import Selector from "./filterSelector";
import NavItems from "./navItems";
import Toggler from "./navToggler";

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand rounded-circle p-0" href="#"><img className='d-inline-block rounded-circle' width="50" height="50" src="rick1.jpg" /> </a>
            <Toggler />
            <NavItems /> 
            <div className="d-flex col-md-6 col-sm-12 col-12 p-0 order-last order-md-1 order-lg-last" >
                <SearchBar />
                <Selector />
            </div>
        </nav>
    );
}

export default Navigation;