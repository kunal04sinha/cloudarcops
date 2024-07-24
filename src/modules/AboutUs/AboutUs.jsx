import Banner from "../../components/Banner";
import Lettalk from "../../components/Lettalk";
import Hero from "./components/Hero";
import Team from "./components/Team";
const AboutUs = () => {
  return (
    <div>
      <Banner
        mainText="Our Story"
        secondText="We make building companies easier"
      />
      <Hero />
      <Team />
      <Lettalk />
    </div>
  );
};

export default AboutUs;
