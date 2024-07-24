import React, { useEffect, useRef } from "react";

const Count = ({ end }) => {
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const endVal = parseInt(end, 10);
    const duration = 2000;
    const increment = endVal / (duration / 16);

    const animate = () => {
      start += increment;
      if (ref.current) {
        ref.current.textContent = `${Math.floor(start)}+`;
        if (start < endVal) {
          requestAnimationFrame(animate);
        } else {
          ref.current.textContent = `${endVal}+`;
        }
      }
    };

    animate();
  }, [end]);

  return <p ref={ref} className="text-5xl font-bold"></p>;
};
export default Count;
