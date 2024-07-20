import React from "react";
import { NocTeamData } from "../NocTeamData";
import TeamCard from "../../Devops/components/TeamCard";

const NocTeam = () => {
  return (
    <>
      <h2 className="text-center md:text-[60px] leading-[32px] font-bold my-14 text-[36px]">
        Your NOC Team
      </h2>
      <div className="flex items-center justify-center md:items-start w-full gap-7 flex-wrap">
        {NocTeamData.map((team) => (
          <TeamCard
            icon={team.icon}
            title={team.title}
            description={team.description}
          />
        ))}
      </div>
    </>
  );
};

export default NocTeam;
