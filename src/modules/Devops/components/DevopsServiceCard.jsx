import React from "react";
import TechCard from "../../Home/components/TechCard";

const ServicesCard = ({ number, title, description, logoImage }) => {
  const alignmentClass =
    number % 2 === 0 ? "md:justify-end" : "md:justify-start";
  return (
    <div
      className={`flex flex-col ${alignmentClass} md:flex-row items-center  p-6 bg-white rounded-lg shadow-md py-12 `}
    >
      <div className="flex items-start mb-4 md:mb-0 w-full md:w-1/3 space-x-4 md:space-x-0 md:space-x-4">
        <span className="text-6xl md:text-9xl font-bold text-gray-200">
          {number}
        </span>
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 text-[18px]">{description}</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
        <img
          src={logoImage}
          className="max-w-full md:h-[300px] shadow-2xl rounded-[10%] pt-2"
        ></img>
      </div>
    </div>
  );
};

export default ServicesCard;
