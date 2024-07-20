import React from "react";
import TechCard from "../../Home/components/TechCard";

const ServicesCard = ({ number, title, description, logoImage, className }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center  p-6 bg-white rounded-lg shadow-md ${className} `}
    >
      <div className="flex items-start mb-4 md:mb-0 md:mr-6 w-[350px]">
        <span className="text-6xl font-bold text-gray-200 mr-4">{number}</span>
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 text-[18px]">{description}</p>
        </div>
      </div>
      <TechCard src={logoImage} className={"max-w-full md:h-[300px]"} />
    </div>
  );
};

export default ServicesCard;
