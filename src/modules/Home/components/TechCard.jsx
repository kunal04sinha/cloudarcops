const TechCard = ({ text, src, className }) => {
  return (
    <div className="  md:w-[550px] md:h-[300px] flex flex-col bg-white rounded-lg shadow-2xl flex-wrap">
      {text && (
        <p className="text-[26px] font-bold text-center mb-5 ">{text}</p>
      )}
      <img src={src} alt={text} className={`rounded-lg ${className}`} />
    </div>
  );
};

export default TechCard;
