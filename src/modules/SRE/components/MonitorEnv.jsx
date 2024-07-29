import React from "react";
import Envimg from "../../../assets/images/Env.webp";

const MonitorEnv = () => {
  return (
    <div className="flex flex-col items-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4 sm:text-3xl">Your Future</h2>
      <h2 className="text-2xl font-bold mb-8 sm:text-3xl">
        Monitoring Environment
      </h2>
      <div className="relative flex justify-center items-center w-full">
        <img
          src={Envimg}
          alt="Monitor"
          className="w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl"
        />
      </div>
    </div>
  );
};

export default MonitorEnv;
