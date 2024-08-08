import React from "react";

const NocTeam = () => {
  return (
    <div className="flex flex-col items-center py-16 sm:py-28">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
        Your SRE Team
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-4xl w-full px-6 sm:px-0">
        <div className="flex flex-col sm:flex-row items-center p-6 border rounded-2xl shadow-2xl bg-white">
          <div className="text-blue-500 mb-4 sm:mb-0">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a5 5 0 015 5v3.58l1.214 3.641A2 2 0 0114.33 18H5.67a2 2 0 01-1.883-2.779L5 10.58V7a5 5 0 015-5zm-.5 14.167a1 1 0 101 1.666 1 1 0 00-1-1.666zM5 11l1 3h8l1-3V7a3 3 0 00-6 0v4H5z" />
            </svg>
          </div>
          <div className="flex flex-col sm:px-5">
            <h3 className="text-xl sm:text-2xl font-bold text-black">
              SRE Manager
            </h3>
            <p className="text-black text-sm sm:text-base">
              The Monitoring Expert is in charge of designing, setting up, and
              continuously improving your monitoring environment. They also make
              sure that all of your automations, tools, and policies are put
              into place and function properly.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center p-6 border rounded-2xl shadow-2xl bg-white">
          <div className="text-blue-500 mb-4 sm:mb-0">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 3a1 1 0 000 2h14a1 1 0 100-2H3zm2 4a1 1 0 000 2h10a1 1 0 100-2H5zm-2 4a1 1 0 000 2h14a1 1 0 100-2H3zm2 4a1 1 0 000 2h10a1 1 0 100-2H5z" />
            </svg>
          </div>
          <div className="flex flex-col sm:px-5">
            <h3 className="text-xl sm:text-2xl font-bold text-black">
              SRE Engineer
            </h3>
            <p className="text-black text-sm sm:text-base">
              We have multiple monitors and dashboards on our NOC Room Screens,
              so when there are any warnings or issues affecting your uptime,
              performance, or security, the NOC Engineer can respond quickly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NocTeam;
