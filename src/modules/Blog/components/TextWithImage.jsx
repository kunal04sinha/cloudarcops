import React from "react";

const TextWithImage = ({ src, paragraph }) => {
  return (
    <div className="flex flex-col md:flex-row items-center my-6">
      <p className="text-lg text-gray-600">{paragraph}</p>
      <img
        className="md:w-1/3 m-4  md:mb-0 md:ml-4"
        src={src}
        alt="description"
      />
    </div>
  );
};

export default TextWithImage;
