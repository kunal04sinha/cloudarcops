import TechImg4 from "../../../assets/images/herops.png";
import AnimatedButton from "../../../components/AnimatedBUtton";
const HeroSection = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center p-4 md:p-8  ">
      <div className="flex flex-col gap-5 text-center md:text-left md:ml-11">
        <h1 className="text-4xl md:text-[76px] font-semibold leading-tight">
          <span className="text-blue-500">DevOps</span> done right!
        </h1>
        <span className="bg-gradient-to-r from-[#0097B2] to-[#57D9D9] h-2 w-8 mx-auto md:mx-0"></span>
        <h3 className="text-lg md:text-[28.3px] font-medium">
          Streamline Your DevOps Workload with CloudArcOps DevOps Solutions
        </h3>
        <AnimatedButton>30 Days free Devops</AnimatedButton>
      </div>
      <img
        className="w-full max-w-xs md:max-w-md lg:max-w-lg mt-4 md:mt-0"
        src={TechImg4}
        alt="Cloudarops"
      />
    </div>
  );
};

export default HeroSection;
