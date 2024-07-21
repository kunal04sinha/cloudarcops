import React from "react";
import TeamCard from "./TeamCard";

const DevOpsTeam = () => {
  return (
    <div className="py-12 px-4 md:py-24 bg-gray-100">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-9">
        Your DevOps Team
      </h2>
      <div className="flex flex-wrap justify-center gap-7">
        <TeamCard
          // icon="https://iamops.io/wp-content/uploads/2022/05/DevOps-5-1024x717.png"
          title="Head Of DevOps"
          description="Responsible for ensuring the ideation and implementation of the best infrastructure and tech stack."
        />
        <TeamCard
          icon="https://iamops.io/wp-content/uploads/2022/05/Untitled-design-22.png"
          title="Automation DevOps"
          description="Accelerate processes, scale environments and enable faster and safer iterations with CI/CD workflows."
        />
        <TeamCard
          icon="https://iamops.io/wp-content/uploads/2022/05/MicrosoftTeams-image-4-1024x1024.png"
          title="DevOps Engineer"
          description="Dedicated to your tech team and business values. They act as the main point of contact for your DevOps Team."
        />
      </div>
    </div>
  );
};

export default DevOpsTeam;
