// AnimatedButton.jsx
import React from "react";
import "./AnimatedButton.css"; // Import the CSS file for the animation

const AnimatedButton = ({ children }) => {
  return <button className="animated-border">{children}</button>;
};

export default AnimatedButton;
