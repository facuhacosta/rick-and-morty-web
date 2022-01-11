import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

function MobileMenuIcon({path, label, icon}) {
  return (
    <li className="flex items-center justify-between border-b-2 px-4 py-2 transition duration-300 hover:text-yellow-900 hover:bg-yellow-100">
      <FontAwesomeIcon className="text-gray-400" size="sm" icon={icon} />
      <Link className="w-32" to={path}>{label}</Link>
    </li>
  );
};

export default MobileMenuIcon;