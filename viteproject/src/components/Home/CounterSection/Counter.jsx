import React, { useState, useEffect } from "react";

const NumberCounter = (props) => {
  const { count, speed } = props;
  const [number, setNumber] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const counterRef = React.createRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCounting(true);
          }
        });
      },
      { threshold: 1 } // Adjust threshold as needed
    );

    observer.observe(counterRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isCounting && number < count) {
      const interval = setInterval(() => {
        setNumber((prevCount) => prevCount + 1);
      }, speed); // Adjust interval as needed

      return () => {
        clearInterval(interval);
      };
    }
  }, [isCounting]);
  useEffect(() => {
    if (isCounting && number === count) {
      setIsCounting(false);
    }
  }, [number]);
  // console.log(count)

  return (
    <div ref={counterRef} className="number-counter">
      <h2>{number} +</h2>
    </div>
  );
};

export default NumberCounter;
