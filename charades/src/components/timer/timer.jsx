import React, { useEffect, useState } from "react";

const Timer = () => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <div>Countdown: {counter}</div>
      <button onClick={() => setCounter(60)}>Start Timer</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Timer;
