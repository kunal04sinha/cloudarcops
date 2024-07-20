import { productions } from "./productions";
import ProductionCard from "./ProductionCard";

const Production = () => {
  return (
    <div className=" bg-gray-100 py-9">
      <h2 className="text-center text-2xl md:text-3xl">Our roadmap to a</h2>
      <h2 className="text-3xl md:text-5xl text-center mb-7 font-bold">
        Production Grade Infrastructure
      </h2>
      <div className="flex justify-center items-center p-5">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          {productions.map((pro) => (
            <ProductionCard
              icon={pro.icon}
              header={pro.header}
              text={pro.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Production;
