import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { paths } from "../../../const/path";
import img from "../../../assets/images/MigratingfromECStoEKS-2-.avif";

const cardsData = [
  {
    id: 1,
    title:
      "Comprehensive Kubernetes Monitoring with Self-Hosted Grafana: A Case Study",
    imageUrl: img,
    description:
      "In the world of enterprise IT, effective monitoring of infrastructure is a critical task. Ensuring that Kubernetes clusters and their components are operating efficiently can be a challenge,especially at scale. In this blog .....",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    id: 2,
    title:
      "Cost-Efficiency and Automation with Serverless Architecture for Enterprise Customers",
    imageUrl: img,
    description:
      "In the ever-evolving landscape of cloud computing, achieving cost-efficiency and seamless automation is paramount for enterprise customers. Recently, I successfully implemented a serverless architecture using AWS services such ......",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    id: 3,
    title:
      "Revolutionizing Web Applications: A Dive into My Three-Tier Architecture with AWS CloudFront",
    imageUrl: img,
    description:
      "In the evolving landscape of web development, the need for robust, scalable, and efficient architectures has never been more critical. As a seasoned DevOps engineer, I recently embarked on a journey to develop a sophisticated.....",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    id: 4,
    title:
      "Enhancing Fintech Infrastructure with AWS EKS and Karpenter: A Journey to Scalability and Reliability",
    imageUrl: img,
    description:
      "In today's rapidly evolving fintech landscape, ensuring that your application infrastructure is both scalable and reliable is paramount. For [Fintech Company], this meant rethinking and optimizing their existing setup .......",
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
