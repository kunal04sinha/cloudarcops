import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../../const/path";
const Oursuccess = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:py-28 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-black">
        Our <span className="text-blue-500">success</span> stories
      </h2>
      <p className="text-center mb-8 text-base sm:text-lg">
        Here’s how we have helped our clients to overcome the DevOps challenges
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Comprehensive Kubernetes Monitoring with Self-Hosted Grafana.{" "}
            {/* <span className="font-bold text-blue-500">A Case Study</span> */}
          </h3>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            In the world of enterprise IT, effective monitoring of
            infrastructure is a critical task. Ensuring that Kubernetes clusters
            and their components are operating efficiently can be a challenge.
          </p>
          <Link
            to="blog?id=1"
            className="bg-blue-500 text-white py-2 px-4 rounded-full"
          >
            Read More
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Cost-Efficiency and Automation with Serverless Architecture{" "}
            {/* <span className="font-bold text-blue-500">
              For Enterprise Customers
            </span> */}
          </h3>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            In the ever-evolving landscape of cloud computing, achieving
            cost-efficiency and seamless automation is paramount for enterprise
            customers. Recently, I successfully implemented a serverless
            architecture.
          </p>
          <Link
            to="blog?id=2"
            className="bg-blue-500 text-white py-2 px-4 rounded-full"
          >
            Read More
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Revolutionizing Web Applications A Dive into My Three-Tier
            Architecture{" "}
            {/* <span className="font-bold text-blue-500">
                AWS CloudFront
            </span> */}
          </h3>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            In the evolving landscape of web development, the need for robust,
            scalable, and efficient architectures has never been more critical.
            As a seasoned DevOps engineer, I recently embarked on a journey to
            develop.
          </p>
          <Link
            to="blog?id=3"
            className="bg-blue-500 text-white py-2 px-4 rounded-full"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Oursuccess;
