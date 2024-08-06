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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            fugiat, officia dolorum minus iure quae voluptate ipsam, atque
            explicabo modi eveniet. Possimus adipisci fuga dolore mollitia ullam
            quo laborum nulla!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            fugiat, officia dolorum minus iure quae voluptate ipsam, atque
            explicabo modi eveniet. Possimus adipisci fuga dolore mollitia ullam
            quo laborum nulla!
          </p>
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </span>
      </div>
    </div>
  );
};
export default PassionateDevops;
