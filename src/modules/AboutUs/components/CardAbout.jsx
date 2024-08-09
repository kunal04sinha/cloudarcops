import React from "react";

const CardAbout = ({ name, para1, para2, para3, founder }) => {
  return (
    <div className="bg-white w-full shadow-2xl mt-6 rounded-lg overflow-hidden">
      <div className="p-4">
        <p className="text-gray-700 font-semibold mb-5 italic">{para1}</p>
        <p className="text-gray-700 font-semibold mb-5 italic">{para2}</p>
        <p className="text-gray-700 font-semibold mb-4 italic">{para3}</p>
        <h3 className="text-lg text-right ">{founder}</h3>
        <p className="text-blue-600 font-bold text-right">{name}</p>
      </div>
    </div>
  );
};

export default CardAbout;
