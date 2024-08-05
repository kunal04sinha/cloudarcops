import React from "react";

const UnorderList = ({ list }) => {
  return (
    <ul className="list-disc pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 mb-4 text-gray-600">
      {list.map((item, index) => (
        <li
          className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg mb-2"
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default UnorderList;
