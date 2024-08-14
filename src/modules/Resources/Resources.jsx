import React from "react";
import Banner from "../../components/Banner";
import CardsDetail from "./components/CardsDeatil";
import Lettalk from "../../components/Lettalk";

const Resources = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <Banner mainText="Our DevOps" secondText="Success Stories​" />
      <CardsDetail />
      <Lettalk />
    </div>
  );
};

export default Resources;
