import HowItWorks from "./components/HowItWorks.jsx";
import MonitoringEnv from "./components/MonitoringEnv.jsx";
import MonitoringSolution from "./components/MonitoringSolution.jsx";
import NocBanner from "./components/NocBanner.jsx";
import NocTeam from "./components/NocTeam.jsx";

const NOC = () => {
  return (
    <div>
      <NocBanner />
      <MonitoringSolution />
      <NocTeam />
      <HowItWorks />
      <MonitoringEnv />
    </div>
  );
};

export default NOC;
