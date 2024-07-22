import DevopsBanner from "./components/DevopsBanner";
import Banner from "../../components/Banner";
import DevOpsServices from "./components/DevOpsServices";
import DevOpsTeam from "./components/DevopsTeam";
import Production from "./components/Production";

const Devops = () => {
  return (
    <div>
      {/* <DevopsBanner /> */}
      <Banner
        mainText="Are you a startup struggling ?"
        secondText="Accelerate with DevOps team ensuring best infrastructure practices.​"
      />

      <DevOpsTeam />
      <DevOpsServices />
      <Production />
    </div>
  );
};

export default Devops;
