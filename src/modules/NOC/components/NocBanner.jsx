import React from "react";
import Button from "../../../components/Button";
import DoubleRightArrowIcon from "../../../assets/icon/DoubleRightArrow";

const NocBanner = () => {
  return (
    <div className="mt-5 relative flex items-center justify-center h-64 md:h-96 bg-gray-800 p-4 overflow-hidden">
      <div className="text-center text-white w-full mx-auto flex items-center flex-col">
        <p className="text-base md:text-lg lg:text-3xl font-medium leading-snug">
          Eliminating the downtime risk with
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
          24/7 proactive monitoring
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-medium leading-snug mt-7">
          We monitor your infrastructure 24/7 to keep 100% UPTIME, so it is
          always secure and available to your clients.
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

export default NocBanner;
