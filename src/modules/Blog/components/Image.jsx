import React from "react";

<<<<<<< HEAD
const Image = ({
  // eslint-disable-next-line react/prop-types
  images = [
    {
      src: "https://iamops.io/wp-content/uploads/2024/03/before2.png",
      alt: "devops",
    },
    {
      src: "https://iamops.io/wp-content/uploads/2024/03/before2.png",
      alt: "devops",
    },
  ],
}) => {
  console.log(images);
=======
const Image = ({ images }) => {
  console.log(images); // This should be placed outside of the JSX return
>>>>>>> c1ce5bd929e48d04e79a234d5a5d4ba328b01e6f

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
      {images?.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-full h-auto mb-4"
        />
      ))}
    </div>
  );
};

export default Image;
