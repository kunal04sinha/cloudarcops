const OrderList = ({ list }) => {
  return (
    <ol>
      {list.map((data) => (
        <li>{data}</li>
      ))}
    </ol>
  );
};

export default OrderList;
