import React from "react";
import Envimg from "../../../assets/images/Env.webp";
const MonitorEnv = () => {
  return (
    <div className="flex flex-col items-center bg-white p-24">
      <h2 className="text-3xl font-bold mb-4">Your Future</h2>
      <h2 className="text-3xl font-bold mb-8">Monitoring Environment</h2>
      <div className="relative flex justify-center items-center w-full">
        <img src={Envimg} alt="Monitor" className="w-full max-w-5xl" />
      </div>
    </div>
  );
};

export default MonitorEnv;
