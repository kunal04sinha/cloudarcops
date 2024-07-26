import Banner from "../../components/Banner";
import Heading from "./components/Heading";
import Image from "./components/Image";
import Paragraph from "./components/Paragraph";
import SubHeading from "./components/SubHeading";

export const getComponent = (content) => {
  const key = Object.keys(content)[0];

  if (key === "heading") {
    return <Heading>{content[key]}</Heading>;
  } else if (key === "banner") {
    return <Banner {...content[key]} />;
  } else if (key === "image") {
    return <Image {...content[key]} />;
  } else if (key === "paragraph") {
    return <Paragraph>{content[key]}</Paragraph>;
  } else if (key === "subHeading") {
    return <SubHeading>{content[key]}</SubHeading>;
  }
};
