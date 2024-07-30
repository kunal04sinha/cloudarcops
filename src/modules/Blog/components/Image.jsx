import React from "react";

const Image = ({
  // eslint-disable-next-line react/prop-types
  images,
}) => {
  console.log(images);

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
