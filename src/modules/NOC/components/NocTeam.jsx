const NocTeam = () => {
  return (
    <div className="flex flex-col items-center py-28">
      <h2 className="text-5xl font-bold ">Your NOC Team</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl">
        <div className="flex flex-row items-center p-6 border rounded-2xl shadow-2xl bg-white">
          <div className="text-blue-500 mb-4">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a5 5 0 015 5v3.58l1.214 3.641A2 2 0 0114.33 18H5.67a2 2 0 01-1.883-2.779L5 10.58V7a5 5 0 015-5zm-.5 14.167a1 1 0 101 1.666 1 1 0 00-1-1.666zM5 11l1 3h8l1-3V7a3 3 0 00-6 0v4H5z" />
            </svg>
          </div>
          <div className="flex flex-col px-5">
            <h3 className="text-2xl font-bold text-black ">NOC Manager</h3>
            <p className="text-black text-sm">
              Responsible for the design, set-up and continuous improvement of
              your Monitoring Environment, the Monitoring Expert ensures all
              your policies, tools and automations are implemented and running
              smoothly.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center p-6 border rounded-2xl shadow-2xl bg-white">
          <div className="text-blue-500 mb-4">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 3a1 1 0 000 2h14a1 1 0 100-2H3zm2 4a1 1 0 000 2h10a1 1 0 100-2H5zm-2 4a1 1 0 000 2h14a1 1 0 100-2H3zm2 4a1 1 0 000 2h10a1 1 0 100-2H5z" />
            </svg>
          </div>
          <div className="flex flex-col px-5">
            <h3 className="text-2xl font-bold text-black ">NOC Engineer</h3>
            <p className="text-black text-sm">
              With several monitors and dashboards on our NOC Room Screens, the
              NOC Engineer is highly responsive to any alerts or incidents that
              affect your uptime, performance or security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NocTeam;
