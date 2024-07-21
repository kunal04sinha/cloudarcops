import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccordionMenu = ({ title, menuItems, handleLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-menu">
      <button
        onClick={toggleMenu}
        className="text-gray-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
      >
        {title}
        <svg
          className={`h-5 w-5 transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pl-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => handleLinkClick(item.path)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-400"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionMenu;
