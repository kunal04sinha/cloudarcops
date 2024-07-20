import DevopsBanner from "./components/DevopsBanner";
import DevOpsServices from "./components/DevOpsServices";
import DevOpsTeam from "./components/DevopsTeam";
import Production from "./components/Production";

const Devops = () => {
  return (
    <div>
      <DevopsBanner />
      <DevOpsTeam />
      <DevOpsServices />
      <Production />
    </div>
  );
};

export default Devops;
