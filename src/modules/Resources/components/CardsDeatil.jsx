import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { paths } from "../../../const/path";
import img from "../../../assets/images/MigratingfromECStoEKS-2-.avif";
import { data } from "../data.js";

const CardsDetail = () => {
  return (
    <div className=" bg-[#f4f4f4] container mx-auto px-4 py-12 px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-10">
        {data.map((card, index) => (
          <Card
            id={card.id}
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            description={card.description}
            buttonText={card.buttonText}
            buttonUrl={card.buttonUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsDetail;
