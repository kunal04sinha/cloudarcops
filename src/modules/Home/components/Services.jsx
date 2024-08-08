import React from "react";

const Services = () => {
  return (
    <div className="bg-[#F4F4F4] py-16">
      <div className="container mx-auto px-4 md:px-10 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="pt-6">
          <h2 className="text-3xl font-extrabold text-black mb-4">
            Our <span className="text-blue-500">services</span>
          </h2>
          <p className="text-lg text-black mb-8">
            We tailor solutions to match your unique demands, from achieving
            production-grade readiness to preserving 24/7 uptime, bolstering
            security, and maximizing cloud budgets.
          </p>
          <div className="flex">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded ">
              Contact Us
            </button>
          </div>
        </div>
        <div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-2xl bg-white">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a5 5 0 015 5v3.58l1.214 3.641A2 2 0 0114.33 18H5.67a2 2 0 01-1.883-2.779L5 10.58V7a5 5 0 015-5zm-.5 14.167a1 1 0 101 1.666 1 1 0 00-1-1.666zM5 11l1 3h8l1-3V7a3 3 0 00-6 0v4H5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">DevOps</h3>
              <p className="text-black">
                Make your cloud infra reach Production Grade
              </p>
            </div>
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-2xl bg-white">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 3a1 1 0 000 2h14a1 1 0 100-2H3zm2 4a1 1 0 000 2h10a1 1 0 100-2H5zm-2 4a1 1 0 000 2h14a1 1 0 100-2H3zm2 4a1 1 0 000 2h10a1 1 0 100-2H5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">SRE 24/7</h3>
              <p className="text-black">
                24/7 infrastructure monitoring to mitigate downtime risks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
