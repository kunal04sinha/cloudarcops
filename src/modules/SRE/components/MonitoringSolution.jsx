import HowItWorks from "./HowItWorks";
export default function MonitoringSolution() {
  return (
    <div className="my-9">
      <h2 className="text-center text-2xl md:text-3xl">Our customized</h2>
      <h2 className="text-3xl md:text-5xl text-center mb-7 font-bold">
        24/7 Monitoring Solution
      </h2>
      <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-2xl">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-6">
          <div className="text-4xl md:text-7xl text-red-200 text-center md:text-left">
            1
          </div>
          <div>
            <h2 className="font-bold text-lg md:text-xl">
              Monitoring System Design
            </h2>
            <span className="text-sm md:text-base">
              The experienced solutions architect gathers the requirements and
              assembles the best monitoring technologies to design a
              comprehensive monitoring solution.
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-6">
          <div className="text-4xl md:text-7xl text-red-200 text-center md:text-left">
            2
          </div>
          <div>
            <h2 className="font-bold text-lg md:text-xl">
              Monitoring System Set-Up
            </h2>
            <span className="text-sm md:text-base">
              Our monitoring team sets up the initial monitoring environment,
              configuring any required applications and tools.
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-6">
          <div className="text-4xl md:text-7xl text-red-200 text-center md:text-left">
            3
          </div>
          <div>
            <h2 className="font-bold text-lg md:text-xl">24/7 Monitoring</h2>
            <span className="stext-sm md:text-base">
              The NOC Team monitors the infrastructure 24/7 with 3 engineers in
              8-hour shifts.
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-6">
          <div className="text-4xl md:text-7xl text-red-200 text-center md:text-left">
            4
          </div>
          <div>
            <h2 className="font-bold text-lg md:text-xl">
              Incident Management
            </h2>
            <span className="text-sm md:text-base">
              In case of an alert, the monitoring team provides Tier 1 support
              and executes the relevant procedures. Additionally, the team
              builds and establishes incident management policies for future
              alerts.
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-6">
          <div className="text-4xl md:text-7xl text-red-200 text-center md:text-left">
            5
          </div>
          <div>
            <h2 className="font-bold text-lg md:text-xl">Risk Mitigation</h2>
            <span className="text-sm md:text-base">
              After an incident, we create reports and documentation for better
              incident management, prevention, and prediction. In addition, our
              reports contain suggestions for future infrastructure
              improvements.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
