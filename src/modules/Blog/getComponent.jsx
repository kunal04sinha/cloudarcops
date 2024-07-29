import React from "react";
import Heading from "./components/Heading";
import Banner from "../../components/Banner";
import Image from "./components/Image";
import OrderList from "./components/OrderList";
import Paragraph from "./components/Paragraph";
import SubHeading from "./components/SubHeading";
import TextWithImage from "./components/TextWithImage";
import UnorderList from "./components/UnOrderList";

export const getComponent = (content) => {
  const key = Object.keys(content)[0];

  if (key === "heading") {
    return <Heading>{content[key]}</Heading>;
  } else if (key === "banner") {
    return <Banner {...content[key]} />;
  } else if (key === "paragraph") {
    return <Paragraph>{content[key]}</Paragraph>;
  } else if (key === "image") {
    return <Image {...content[key]} />;
  } else if (key === "subHeading") {
    return <SubHeading>{content[key]}</SubHeading>;
  } else if (key === "bullet") {
    return <UnorderList list={content[key]} />;
  } else if (key === "numbericList") {
    return <OrderList list={content[key]} />;
  } else if (key === "textWithImage") {
    return <TextWithImage {...content[key]} />;
  }
};
