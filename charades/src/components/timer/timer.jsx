import React, { useEffect, useState } from "react";
import "../../components/timer/timer.style.scss";
import buzzer from "./Buzzer.mp3";

const Timer = ({ count }) => {
  const [counter, setCounter] = React.useState();

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  alert = (e) => {
    if (e === 0) return <audio src={buzzer} autoPlay />;
  };

  return (
    <div className="App">
      <div className="buttons">
        <div className="countdown">Countdown: {counter}</div>
        {alert(counter)}
        <button className="start" onClick={() => setCounter(60)}>
          Start Timer
        </button>
        <button className="reset" onClick={() => setCounter()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
