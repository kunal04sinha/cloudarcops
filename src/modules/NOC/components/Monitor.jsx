import React from "react";

const Monitor = () => {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen bg-gray-100 p-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">
          Our customized{" "}
          <p className="text-black text-4xl">24/7 Monitoring Solution</p>
        </h2>
      </div>
      <div className="bg-white  rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <ol className="space-y-8 ">
          <li className="flex items-start space-x-8 ">
            <div className="text-4xl text-gray-300">1</div>
            <div>
              <h3 className="text-xl font-semibold">
                Monitoring System Design
              </h3>
              <p className="text-gray-700">
                The experienced solutions architect gathers the requirements and
                assembles the best monitoring technologies to design a
                comprehensive monitoring solution.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-8">
            <div className="text-4xl text-gray-300">2</div>
            <div>
              <h3 className="text-xl font-semibold">
                Monitoring System Set-Up
              </h3>
              <p className="text-gray-700">
                Our monitoring team sets up the initial monitoring environment,
                configuring any required applications and tools.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-8">
            <div className="text-4xl text-gray-300">3</div>
            <div>
              <h3 className="text-xl font-semibold">24/7 Monitoring</h3>
              <p className="text-gray-700">
                The NOC Team monitors the infrastructure 24/7 with 3 engineers
                in 8-hour shifts.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-8">
            <div className="text-4xl text-gray-300">4</div>
            <div>
              <h3 className="text-xl font-semibold">Incident Management</h3>
              <p className="text-gray-700">
                In case of an alert, the monitoring team provides Tier 1 support
                and executes the relevant procedures. Additionally, the team
                builds and establishes incident management policies for future
                alerts.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-8">
            <div className="text-4xl text-gray-300">5</div>
            <div>
              <h3 className="text-xl font-semibold">Risk Mitigation</h3>
              <p className="text-gray-700">
                After an incident, we create reports and documentation for
                better incident management, prevention, and prediction. In
                addition, our reports contain suggestions for future
                infrastructure improvements.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Monitor;
