import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  title,
  imageUrl,
  description,
  buttonText,
  buttonUrl,
  handleLinkClick,
}) => {
  return (
    <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6 ">
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="text-right py-5">
          <Link
            to={buttonUrl}
            onClick={() => handleLinkClick(buttonUrl)}
            className=" bg-blue-500 text-white py-2 px-4 rounded-full"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
