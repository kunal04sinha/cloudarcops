import React from "react";

const SubHeading = ({ children }) => {
  return (
    <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-500">
      {children}
    </h2>
  );
};

export default SubHeading;
