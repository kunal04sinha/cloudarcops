import React from "react";
import Button from "../../../components/Button";
import DoubleRightArrowIcon from "../../../assets/icon/DoubleRightArrow";

const DevopsBanner = () => {
  return (
    <div className="mt-5 relative flex items-center justify-center h-fit md:h-96 bg-gray-800 p-4 overflow-hidden">
      <div className="text-center text-white w-full mx-auto flex items-center flex-col">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Are you a startup struggling to keep pace with rapid software
          delivery?
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-medium leading-snug mt-7">
          Accelerate your R&D with a dedicated DevOps team that ensures your
          infrastructure follows the best practices.
        </p>
        <Button
          size="large"
          variant="rounded"
          className="mt-7"
          icon={DoubleRightArrowIcon}
        >
          Schedule a call
        </Button>
      </div>
    </div>
  );
};

export default DevopsBanner;
