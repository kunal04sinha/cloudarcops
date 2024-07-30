import React from "react";
import Count from "./Count";

const DeliverWithExpertise = () => {
  return (
    <div className=" bg-[#f4f4f4] md:py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 px-10  gap-10 md:px-40  justify-center pt-12 pb-12">
        <div className="flex justify-center items-center ">
          <div className=" mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              We deliver with <span className="text-blue-500">expertise</span>
            </h2>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              suscipit unde temporibus at quaerat quod tempore deserunt,
              doloribus, qui neque illum eaque nam ex perspiciatis inventore
              nisi iusto, ullam blanditiis!
            </p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              debitis necessitatibus, ratione ut minus quod quae perspiciatis
              rerum distinctio saepe repellat repellendus alias, beatae nam
              velit illum odit expedita totam.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-2 gap-6 lg:w-1/2">
            <div className="text-center">
              <Count end="5" />
              {/* <p className="text-5xl font-bold">40+</p> */}
              <p className="text-gray-600">DevOps Engineers</p>
            </div>
            <div className="text-center">
              <Count end="25" />
              <p className="text-gray-600">Projects</p>
            </div>

            <div className="text-center">
              <Count end="6" />
              <p className="text-gray-600">Clients</p>
            </div>
            <div className="text-center">
              <Count end="3" />
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverWithExpertise;
