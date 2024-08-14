import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../../const/path";

const Card = ({
  id,
  title,
  imageUrl,
  description,
  buttonText,
  buttonUrl,
  handleLinkClick,
}) => {
  return (
    <div className="bg-white shadow-2xl rounded-xl overflow-hidden ">
      <div className="w-full h-48 relative">
        <img
          className="absolute inset-0 w-full h-full object-cover  "
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="p-6">
        <p className="font-bold text-[#3B82F6] mb-4">{title}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="text-right py-5">
          <Link
            to={`${paths.blog}?id=${id}`}
            className="bg-blue-500 text-white py-2 px-4 rounded-full"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
