import React from "react";
import { useEffect, useState } from "react";
import "../../components/timer/timer.style.scss";
import buzzer from "./Buzzer.mp3";

const Timer = ({ count }) => {
  const [counter, setCounter] = useState();

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const buzzAlert = (e) => {
    if (e === 0) return <audio src={buzzer} autoPlay />;
  };

  return (
    <div className="App">
      <div className="buttons">
        <div className="countdown">{!counter ? "60" : counter}</div>
        {buzzAlert(counter)}
        <button className="start" onClick={() => setCounter(60)}>
          Begin
        </button>
        <button className="reset" onClick={() => setCounter()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
