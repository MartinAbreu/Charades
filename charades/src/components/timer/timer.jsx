import React from "react";
import { useEffect, useState } from "react";
import "../../components/timer/timer.style.scss";
import gameOver from "./game_over.mp3";
import clockTicking from "./clock_ticking.mp3";

const Timer = ({ changeParentCounter, difficultyClicked, startOver }) => {
  const [counter, setCounter] = useState();

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    sendCount(counter);
    return () => clearInterval(timer);
  }, [counter]);

  const buzzAlert = (e) => {
    switch (true) {
      case e === 0:
        return <audio src={gameOver} autoPlay />;
      case e > 0:
        return <audio src={clockTicking} autoPlay loop />;
      default:
        return null;
    }
  };

  const colorClassChange = (count) => {
    switch (true) {
      case count >= 45:
        return "green pulse";

      case count >= 30:
        return "yellow pulse";

      case count >= 15:
        return "orange pulse";

      case count >= 1:
        return "red pulse";

      default:
        return "green";
    }
  };

  const counterChange = (count) => {
    switch (true) {
      case count === 1:
        return "Time's Up!";

      case count === 15:
        return "Hurry!";

      case count === 30:
        return "Keep Going!";

      case count === 45:
        return "You Got It!";

      default:
        return counter;
    }
  };

  const sendCount = (e) => {
    switch (true) {
      case e != null:
        changeParentCounter(e);
        break;
      default:
        return null;
    }
  };

  //**Will use when I figure out how to reset everything with out refreshing page */
  // const playAgain = (e) => {
  //   switch (true) {
  //     case e:
  //       return startOver(e);
  //     default:
  //       return null;
  //   }
  // };

  const refresh = () => {
    window.location.reload(false);
  };

  return (
    <div className="timer-wrap">
      <div className="countdown-wrap">
        <div className={`countdown ${colorClassChange(counter)}`}>
          {!counter ? "Let's Start" : counterChange(counter)}
        </div>
      </div>
      {buzzAlert(counter)}
      <div className={`button-wrap`}>
        <button
          className={`start ${!difficultyClicked ? "disabled" : null}`}
          onClick={() => setCounter(59)}
        >
          GO!
        </button>
        <button
          className={`reset ${!difficultyClicked ? "disabled" : null}`}
          onClick={() => {
            setCounter();
            refresh();
          }}
        >
          Play Again!
        </button>
      </div>
    </div>
  );
};

export default Timer;
