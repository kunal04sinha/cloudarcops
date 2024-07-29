import TechImg4 from "../../../assets/images/herops.png";
import AnimatedButton from "../../../components/AnimatedBUtton";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center p-4 md:p-8 gap-8 md:gap-16">
      <div className="flex flex-col gap-5 text-center md:text-left md:ml-11">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          <span className="text-blue-500">DevOps</span> done right!
        </h1>
        <span className="bg-gradient-to-r from-[#0097B2] to-[#57D9D9] h-1 w-8 mx-auto md:mx-0"></span>
        <h3 className="text-base md:text-lg lg:text-2xl font-medium">
          Streamline Your DevOps Workload with CloudArcOps DevOps Solutions
        </h3>
        <div className="flex justify-center md:justify-start pb-5 md:pb-0">
          <AnimatedButton>Try 30 days free devops</AnimatedButton>
        </div>
      </div>
      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
        <video
          className="w-full h-auto max-h-screen"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Devops.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
