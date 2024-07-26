import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { paths } from "../../../const/path";
import img from "../../../assets/images/MigratingfromECStoEKS-2-.avif";

const cardsData = [
  {
    id: 1,
    title: "Migration from EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    id: 2,
    title: "Migration from EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    id: 3,
    title: "Migration from EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    id: 4,
    title: "Migration from EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    id: 5,
    title: "Migration from EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    id: 6,
    title: "Migration from EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    id: 7,
    title: "Migration from EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
];

const CardsDetail = () => {
  return (
    <div className="container mx-auto px-4 py-12 px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-10">
        {cardsData.map((card, index) => (
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
