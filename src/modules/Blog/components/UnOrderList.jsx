const UnorderList = ({ list }) => {
  return (
    <ul>
      {list.map((data) => (
        <li>{data}</li>
      ))}
    </ul>
  );
};

export default UnorderList;
