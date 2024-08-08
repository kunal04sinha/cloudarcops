import React from "react";
import TeamCard from "./TeamCard";
import one from "../../../assets/images/head-of-devops-1.png";
import two from "../../../assets/images/Untitled-design-22.png";
import three from "../../../assets/images/MicrosoftTeams-image-4-1024x1024.png";
const DevOpsTeam = () => {
  return (
    <div className="py-12 px-4 md:py-24 bg-gray-100">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-9">
        Your DevOps Team
      </h2>
      <div className="flex flex-wrap justify-center gap-7">
        <TeamCard
          icon={one}
          title="Head Of DevOps"
          description="Accountable for making sure the greatest tech stack and infrastructure are developed and put into place."
        />
        <TeamCard
          icon={two}
          title="Automation DevOps"
          description="CI/CD workflows speed up procedures, scale environments, and allow for safer, quicker iterations."
        />
        <TeamCard
          icon={three}
          title="DevOps Engineer"
          description="Committed to your company values and technology team. They serve as your DevOps Team's primary point of contact."
        />
      </div>
    </div>
  );
};

export default DevOpsTeam;
