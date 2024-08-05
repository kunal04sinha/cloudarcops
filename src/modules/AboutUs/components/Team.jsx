import React from "react";
import CardAbout from "./CardAbout";
import foundingMembers from "../foundingMembers.json";

const Team = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Message by our <span className="text-blue-500">Founding</span> Members
        </h2>
        <div className="mb-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {foundingMembers.map((member) => (
              <CardAbout
                key={member.name}
                para1={member.para1}
                para2={member.para2}
                para3={member.para3}
                founder={member.founder}
                name={member.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
