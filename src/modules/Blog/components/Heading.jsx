import React from "react";

const Heading = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold mb-4 text-gray-800 text-left">
      {children}
    </h1>
  );
};

export default Heading;
