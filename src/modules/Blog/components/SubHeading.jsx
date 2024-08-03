import React from "react";

const SubHeading = ({ children }) => {
  return (
    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6 font-semibold mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 text-black">
      {children}
    </h2>
  );
};

export default SubHeading;
