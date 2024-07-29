import React from "react";

const UnorderList = ({ list }) => {
  return (
    <ul className="list-disc pl-6 mb-4 text-gray-600">
      {list.map((item, index) => (
        <li className="text-lg mb-2" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default UnorderList;
