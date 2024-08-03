import React from "react";

const Image = ({
  // eslint-disable-next-line react/prop-types
  images,
}) => {
  console.log(images);

  return (
    // TODO: if required two images in future the change it
    // <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
    <div className="flex items-center justify-center">
      {images?.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-[550px] h-auto mb-4"
        />
      ))}
    </div>
  );
};

export default Image;
