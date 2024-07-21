import React from "react";
import TeamCard from "./TeamCard";
import ServicesCard from "./DevopsServiceCard";
import { services } from "./services";

const DevOpsServices = () => {
  return (
    <div>
      <h2 className="text-center md:text-[60px] leading-[32px] font-bold my-9 text-[36px]">
        DevOps Team for you!
      </h2>
      <div className="even-space  ">
        {services.map((service, index) => (
          <ServicesCard
            number={service.number}
            title={service.title}
            description={service.description}
            logoImage={service.logoImage}
          />
        ))}
      </div>
    </div>
  );
};

export default DevOpsServices;
