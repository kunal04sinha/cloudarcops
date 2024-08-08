import React from "react";

const Monitor = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="text-center mb-6 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Our customized
          <p className="text-black text-3xl md:text-4xl">
            24/7 Monitoring Solution
          </p>
        </h2>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-3xl w-full">
        <ol className="space-y-6 md:space-y-8">
          <li className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-4xl text-gray-300">1</div>
            <div>
              <h3 className="text-xl font-semibold">
                Monitoring System Design
              </h3>
              <p className="text-gray-700">
                To create a complete monitoring solution, the skilled solutions
                architect compiles the necessary specifications and brings
                together the top monitoring technologies.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-4xl text-gray-300">2</div>
            <div>
              <h3 className="text-xl font-semibold">
                Monitoring System Set-Up
              </h3>
              <p className="text-gray-700">
                Our monitoring team configures any necessary tools and programs
                and sets up the initial monitoring environment.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-4xl text-gray-300">3</div>
            <div>
              <h3 className="text-xl font-semibold">24/7 Monitoring</h3>
              <p className="text-gray-700">
                Three engineers work eight-hour shifts as part of the SRE Team
                to continuously monitor the infrastructure.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-4xl text-gray-300">4</div>
            <div>
              <h3 className="text-xl font-semibold">Incident Management</h3>
              <p className="text-gray-700">
                The monitoring team initiates the necessary procedures and
                offers Tier 1 support in the event of an alarm. The group also
                creates and implements incident management procedures for
                upcoming notifications.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-4xl text-gray-300">5</div>
            <div>
              <h3 className="text-xl font-semibold">Risk Mitigation</h3>
              <p className="text-gray-700">
                In order to improve incident management, prevention, and
                prediction, we produce reports and documentation following an
                incident. Furthermore, our evaluations provide recommendations
                for upcoming infrastructure upgrades.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Monitor;
