// AnimatedButton.jsx
import React from "react";
import "./AnimatedButton.css";
import { Link } from "react-router-dom";
import { paths } from "../const/path";
const AnimatedButton = ({ handleLinkClick, children }) => {
  return (
    <Link
      to={paths.contact}
      onClick={() => handleLinkClick(paths.contact)}
      className="animated-border flex justify-center algin-items"
    >
      {children}
    </Link>
  );
};

export default AnimatedButton;
