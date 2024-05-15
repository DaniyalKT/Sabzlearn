import React, { useEffect, useState } from "react";

function LandingCounter({count}) {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1);

    if (counter === count) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return <span className="landing-status__count">{Number(counter).toLocaleString()}</span>;
}

export default LandingCounter;
