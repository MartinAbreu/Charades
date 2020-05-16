import React, { useEffect, useState } from "react";
import "./timer.style.scss";

const Timer = () => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <div className="buttons">
        <div className="countdown">Countdown: {counter}</div>

        <button className="start" onClick={() => setCounter(60)}>
          Start Timer
        </button>
        <button className="reset" onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
