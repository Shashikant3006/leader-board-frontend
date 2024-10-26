import React from "react";
import { Link } from "react-router-dom";

const TabButton = ({ to, isActive, children }) => {
  const buttonStyle = isActive
    ? "bg-blue-500 text-white"
    : "bg-gray-200 text-gray-700";

  return (
    <Link to={to}>
      <button className={`${buttonStyle} py-2 px-4 rounded-full`}>
        {children}
      </button>
    </Link>
  );
};

export default TabButton;
