import React from "react";
import {
    Link
} from "react-router-dom"

function NavItems() {
    return (
      <div className="hidden desktop:flex space-x-4 text-xl text-gray-400">
        <Link className="hover:text-gray-600 transition duration-150" to="/">Home</Link>
        <Link className="hover:text-gray-600 transition duration-150" to="/episodes">All Episodes</Link>
        <Link className="hover:text-gray-600 transition duration-150" to="/locations">All Locations</Link>
      </div>
    );
}

export default NavItems;