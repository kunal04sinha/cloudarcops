import cloud from "../../../assets/images/passion.svg";

const PassionateDevops = () => {
  return (
    <div className=" bg-[#f4f4f4] grid grid-cols-1 md:grid-cols-2 px-10 md:px-40 justify-center mt-9 pb-9">
      <div className="flex justify-center items-center p-4">
        <img src={cloud} className="rounded-3xl w-[450px] aspect-square" />
      </div>
      <div className="flex flex-col gap-5 pt-4 ">
        <h2 className="text-[40px] text-black font-bold leading-[1.4em]">
          We are <span className="text-blue-500 ">Passionate</span> DevOps
        </h2>
        <span className="flex flex-col gap-6 text-[20px] font-normal text-black ">
          <p>
            At CloudArcOps, Terraform, EKS, and Kubernetes are our daily
            essentials, and AWS Lambda is always on our minds. Our mission is to
            prepare your infrastructure and CI/CD pipelines for seamless
            scalability.
          </p>
          <p>
            We proactively address potential failure points, enhance
            performance, ensure uptime, and optimize costs. When incidents
            arise, we take swift action, restoring operations efficiently no
            matter the time of day.
          </p>
          <p>We are your dedicated DevOps team. We are CloudArcOps.</p>
        </span>
      </div>
    </div>
  );
};
export default PassionateDevops;
