import React from "react";

const OrderList = ({ list }) => {
  return (
    <ol className="list-decimal pl-4 sm:pl-6 md:pl-8 lg:pl-12 mb-4 text-gray-600">
      {list.map((item, index) => (
        <li className="text-lg  mb-2" key={index}>
          {item}
        </li>
      ))}
    </ol>
  );
};

export default OrderList;
