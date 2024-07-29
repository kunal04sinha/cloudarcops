import React from "react";

const OrderList = ({ list }) => {
  return (
    <ol className="list-decimal pl-6 mb-4 text-gray-600">
      {list.map((item, index) => (
        <li className="text-lg mb-2" key={index}>
          {item}
        </li>
      ))}
    </ol>
  );
};

export default OrderList;
