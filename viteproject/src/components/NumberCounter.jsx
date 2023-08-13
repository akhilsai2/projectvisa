import React, { useState, useEffect } from 'react';

const NumberCounter = () => {
  const [count, setCount] = useState(0);
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
    if (isCounting && count < 200) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 5); // Adjust interval as needed

      return () => {
        clearInterval(interval);
      };
    }
  }, [isCounting]);
  useEffect(() => {
    if (isCounting && count === 200) {
      setIsCounting(false)
    }
  }, [count]);
  console.log(count)

  return (
    <div ref={counterRef} className="number-counter">
      <h2>{count}</h2>
      <p>Happy Customers</p>
    </div>
  );
};

export default NumberCounter;
