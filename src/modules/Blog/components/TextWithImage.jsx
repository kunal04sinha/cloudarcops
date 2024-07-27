const TextWithImage = ({ paragraph, src }) => {
  return (
    <div className="flex">
      <p>{paragraph}</p>
      <img src={src} />
    </div>
  );
};

export default TextWithImage;
