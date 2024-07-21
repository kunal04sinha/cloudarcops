import React from "react";

const TeamCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white border h-full flex-grow border-silver rounded-lg shadow-md p-6 text-left max-w-sm w-full transition-transform duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
      <div className=" mb-4">
        <img
          src={icon}
          alt={`${title} icon`}
          className="h-16 w-16 object-cover rounded-full"
        />
      </div>
      <div className="text-center">
        <h3 className="text-black text-xl font-bold mb-2">{title}</h3>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
