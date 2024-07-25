import React from "react";
import CardAbout from "./CardAbout";
import foundingMembers from "../foundingMembers.json";

const Team = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our <span className="text-blue-500">Amazing</span> Team Members
        </h2>
        <div className="mb-8 px-4">
          <h3 className="text-2xl font-bold text-left mb-4">Founding Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {foundingMembers.map((member) => (
              <CardAbout
                key={member.name}
                name={member.name}
                title={member.title}
                location={member.location}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
