import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function ExitButton({ handleClick }) {
  
  return (
    <div className="hover:bg-yellow-100 hover:text-yellow-900 transition duration-300 mb-2 justify-between items-center flex py-2 px-6 border-t-2">
      <FontAwesomeIcon className="text-gray-500 cursor-pointer" onClick={handleClick} size="lg" icon={faSignOutAlt} />
      <button className="focus:outline-none font-mono text-xl" onClick={handleClick}>Salir</button>
    </div>
  );
};

export default ExitButton;