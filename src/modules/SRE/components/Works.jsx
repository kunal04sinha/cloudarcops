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
              With 8-hour shifts and 3-member teams, there isn't a moment in the
              day your infrastructure isn't fully monitored. This way, we
              respond promptly and manage any potential incidents.
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
              To make your monitoring environment as accessible, automated, and
              updated as possible, we use dynamic dashboards to measure your
              uptime, security, backups, and performance across channels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
