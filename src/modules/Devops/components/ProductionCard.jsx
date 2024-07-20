import React from "react";

const ProductionCard = ({ icon, header, text }) => {
  return (
    <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden md:w-[240px]">
      <div className="p-4">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <img src={icon} alt={text} className="w-20 h-20" />
        </div>

        {/* Header */}
        <div className="text-xl font-bold mb-2 text-center">{header}</div>

        {/* Text */}
        <p className="text-gray-700 text-center">{text}</p>
      </div>
    </div>
  );
};

export default ProductionCard;
