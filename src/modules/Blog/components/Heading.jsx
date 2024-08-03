import React from "react";

const Heading = ({ children }) => {
  return (
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 text-blue-500 text-left pt-9">
      {children}
    </h1>
  );
};

export default Heading;
