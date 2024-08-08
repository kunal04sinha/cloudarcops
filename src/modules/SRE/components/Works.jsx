import React from "react";

const Works = () => {
  return (
    <div className="flex flex-col items-center bg-[#F4F4F4] py-16">
      <h2 className="text-5xl font-bold mb-8">How it works</h2>
      <div className="flex flex-col lg:flex-row justify-around items-start w-full max-w-6xl space-y-8 lg:space-y-0 ">
        <div className="flex flex-row items-center text-center lg:text-left lg:items-start lg:w-1/2 px-4">
          <div className="text-9xl text-gray-300 mb-4 ">1</div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 flex items-center">
              24/7 Monitoring{" "}
              <span className="text-lg text-blue-500 ml-2">24/7</span>
            </h3>
            <p className="text-gray-700">
              There is never a time during the day when your infrastructure
              isn't fully monitored thanks to 3-person teams and 8-hour shifts.
              In this manner, we handle any possible situations and react
              quickly.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center text-center lg:text-left lg:items-start lg:w-1/2 px-4">
          <div className="text-9xl text-gray-300 mb-4">2</div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 flex items-center">
              Monitoring Dashboards{" "}
              <span className="text-lg text-blue-500 ml-2">🌥</span>
            </h3>
            <p className="text-gray-700">
              We employ dynamic dashboards to analyze your uptime, security,
              backups, and performance across channels in order to make your
              monitoring environment as easily accessible, updated as feasible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
