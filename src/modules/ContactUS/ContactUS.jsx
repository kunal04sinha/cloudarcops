import Banner from "../../components/Banner";
import Form from "./components/Form";
import FormNew from "./components/FormNew";

const ContactUs = () => {
  return (
    <>
      <Banner
        mainText="Contact Us"
        secondText="You can reach our pleasant staff at any time.​"
      />
      {/* <h1>Contact</h1> */}
      <div className="bg-white ">
        {/* <Form /> */}
        <FormNew />
      </div>
    </>
  );
};

export default ContactUs;
