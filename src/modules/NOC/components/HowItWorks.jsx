export default function HowItWorks() {
  return (
    <div className="mx-16">
      <h1 className="text-4xl md:text-6xl font-bold text-center my-11">
        How It Works
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 mb-6">
        <div className="text-red-200 text-4xl text-center md:text-9xl">1</div>
        <div>
          <div className="flex mb-1">
            <h2 className="font-bold text-base md:text-3xl">24/7 Monitoring</h2>
            <img
              src="https://iamops.io/wp-content/uploads/elementor/thumbs/24-7-ppdposl53gyft13jmddaqo5mub759cjtm7capnot64.jpg"
              alt="24/7 Image"
            />
          </div>
          <span className="text-sm md:text-xl text-justify">
            With 8-hour shifts and 3-member teams, there isn’t a moment in the
            day your infrastructure isn’t fully monitored. This way, we respond
            promptly and manage any potential incidents.
          </span>
        </div>
        <div className=" text-red-200 text-4xl text-center md:text-9xl">2</div>
        <div>
          <div className="flex mb-1">
            <h2 className="font-bold text-base md:text-3xl">
              Monitoring Dashboards
            </h2>
            <img
              src="https://iamops.io/wp-content/uploads/elementor/thumbs/gear-ppdpotizeov53sxu6ce23xgxdw3ztv6ni495zw35kg.jpg"
              alt="Gear Image"
            />
          </div>
          <span className="text-sm md:text-xl text-justify">
            To make your monitoring environment as accessible, automated, and
            updated as possible, we use dynamic dashboards to measure your
            uptime, security, backups, and performance across channels.
          </span>
        </div>
      </div>
    </div>
  );
}
