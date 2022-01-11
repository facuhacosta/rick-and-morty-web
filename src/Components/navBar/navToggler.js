import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ExitButton from "./exitButton/exitButton";
import MobileMenuIcon from "./mobileMenuIcon/mobileMenuIcon";

function Toggler() {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="desktop:hidden flex flex-col">
      <button className="w-10 h-10 top-0 right-0 border-2 rounded-lg border-slate-600 focus:outline-none transition duration-100 text-gray-400 hover:text-yellow-700 hover:bg-yellow-50" onClick={handleClick} type="button"> 
        <FontAwesomeIcon size="lg" icon='bars' />
      </button>
      <div className={`fixed desktop:hidden w-56 h-screen border-t-8 border-b-8 border-yellow-100 top-0 flex flex-col justify-between bg-white shadow-md transition-all duration-200 ease-linear ${isOpen ? 'right-0' : ' -right-60'} `}>
        <ul className= "text-xl font-semibold mt-2 space-y-2">
          <MobileMenuIcon path='/' icon='home' label='Home' />
          <MobileMenuIcon path='/episodes' icon='book-open' label='All Episodes' />
          <MobileMenuIcon path='/locations' icon='globe' label='All Locations' />
        </ul>
        <ExitButton handleClick={handleClick} />
      </div>   
    </div>
  );
}

export default Toggler;