import React from "react";

const Hero = () => {
  return (
    <div className="bg-white p-10 max-w-5xl md:my-14 mx-auto">
      <div className="relative flex flex-col md:flex-row items-start mb-4 ">
        {/* <div className=" md:absolute md:bottom-[2%] md:left-[-3%]   text-9xl text-blue-200 md:mr-4">
          “
        </div> */}
        <p className="text-black text-center z-10 text-2xl font-light tracking-wider  md:text-left">
          We are two entrepreneurs who began our journey as Professional Service
          providers in the tech market. Through observing our clients, we
          recognized the critical importance of assembling the right team to
          successfully execute work plans.
        </p>
      </div>
      <p className="text-black text-center md:text-left text-2xl mb-4 font-light tracking-wider">
        However, many executives struggle to build such teams, which can put
        their companies at risk of failure.
      </p>
      <p className="font-bold text-lg md:text-left text-center text-black ">
        We aim to create and oversee DevOps teams with efficiency so you may
        concentrate on innovation and expansion.
      </p>
    </div>
  );
};

export default Hero;
