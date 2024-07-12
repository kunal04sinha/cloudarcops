import React from "react";

const Services = () => {
  return (
    <div className=" bg-[#F4F4F4] md:py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 px-10  gap-10 md:px-40  justify-center pt-12 pb-12">
        <div className="pt-6">
          <h2 className="text-3xl font-extrabold text-balck mb-4 ">
            Our <span className="text-blue-500">services</span>
          </h2>
          <p className="text-lg text-balck mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Recusandae velit facilis, dolores et saepe possimus perferendis cum
            officiis eaque doloribus nulla nihil qui cumque repudiandae <br />
            temporibus harum sint sequi. Quasi!
          </p>
          <div className="flex ">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600">
              Contact Us
            </button>
          </div>
        </div>
        <div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-2xl ">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a5 5 0 015 5v3.58l1.214 3.641A2 2 0 0114.33 18H5.67a2 2 0 01-1.883-2.779L5 10.58V7a5 5 0 015-5zm-.5 14.167a1 1 0 101 1.666 1 1 0 00-1-1.666zM5 11l1 3h8l1-3V7a3 3 0 00-6 0v4H5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-balck mb-2 ">DevOps</h3>
              <p className="text-balck">
                Make your cloud infra reach Production Grade
              </p>
            </div>
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-2xl ">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 3a1 1 0 000 2h14a1 1 0 100-2H3zm2 4a1 1 0 000 2h10a1 1 0 100-2H5zm-2 4a1 1 0 000 2h14a1 1 0 100-2H3zm2 4a1 1 0 000 2h10a1 1 0 100-2H5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-balck mb-2 ">NOC 24/7</h3>
              <p className="text-balck">
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
