import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../const/path";
const Lettalk = ({ handleLinkClick }) => {
  return (
    <div className="bg-blue-500">
      <div className="grid grid-cols-1 md:grid-cols-2 px-10  gap-10 md:px-40  justify-center pt-12 pb-12">
        <h2 className="text-white text-lg sm:text-2xl font-bold text-center sm:text-left md:mb-4 sm:mb-0">
          Looking for a dedicated DevOps team?
        </h2>
        <Link
          to={paths.contact}
          onClick={() => handleLinkClick(paths.contact)}
          className="bg-white text-white font-bold py-2 px-4 rounded flex justify-center items-center"
        >
          <span className="text-blue-500">Let's Talk DevOps</span>
        </Link>
      </div>
    </div>
  );
};

export default Lettalk;
