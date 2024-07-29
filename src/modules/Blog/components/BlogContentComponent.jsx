import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import SubHeading from "./SubHeading";
// import UnorderList from "./UnorderList";
import TextWithImage from "./TextWithImage";

const BlogContentComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md">
      <Heading>1. Overview</Heading>
      <Paragraph>
        FitFusion is a wellness platform for fitness centers, enhancing gym
        experiences with personalized fitness plans, health monitoring, and a
        supportive community. Their unique digital wallet tracks progress and
        rewards user’s achievements to boost overall fitness success.
      </Paragraph>
      <Paragraph>
        As an early-stage pre-seed startup, FitFusion operated on a local
        machine. They needed to make its application accessible to external
        users, design partners, and potential investors.
      </Paragraph>
      <SubHeading>Goal</SubHeading>
      <Paragraph>
        To deploy FitFusion’s application on cloud infrastructure, enabling
        users to test the application and facilitate collaboration among the
        development team.
      </Paragraph>
      <SubHeading>Scope of work</SubHeading>
      {/* <UnorderList
        list={[
          "Staging Environment: Establish a dedicated Staging Environment with optimized resources and specific configurations for comprehensive testing.",
          "Streamlined CI/CD Workflows: Automate code processes for reliable CI/CD workflows, ensuring smooth integration, testing, and deployment.",
          "Containerized Application Management: Use Kubernetes, Helm charts, and Amazon EKS to manage application effectively in the Staging Environment, ensuring adaptability and efficiency.",
        ]}
      /> */}
      <TextWithImage
        src="https://iamops.io/wp-content/uploads/2024/03/before2.png"
        alt="Before"
        paragraph="FitFusion had to run and test their application code on a local machine."
      />
      <TextWithImage
        src="https://iamops.io/wp-content/uploads/2024/03/after2.png"
        alt="After"
        paragraph="FitFusion had a cloud platform where they could easily manage their application code."
      />
    </div>
  );
};

export default BlogContentComponent;
