import Banner from "../../components/Banner";
import Lettalk from "../../components/Lettalk";
import Monitor from "./components/Monitor";
import MonitorEnv from "./components/MonitorEnv";
import NocTeam from "./components/NocTeam";
import Works from "./components/Works";

const NOC = () => {
  return (
    <div>
      <Banner
        mainText="24/7 proactive monitoring"
        secondText="So it is always secure and available to your clients.​"
      />

      <Monitor />
      <NocTeam />
      <Works />
      <MonitorEnv />
      <Lettalk talk="Schedule a Call " />
    </div>
  );
};

export default NOC;
