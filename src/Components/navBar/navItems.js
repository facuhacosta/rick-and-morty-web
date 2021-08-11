import React from "react";

function NavItems() {
    return (
        <div className="collapse navbar-collapse text-right order-3" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">All Episodes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">All Locations</a>
                </li>
            </ul>
        </div>

        
    );
}

export default NavItems;