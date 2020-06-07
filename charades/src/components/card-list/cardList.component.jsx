import React from "react";
import Card from "../card/card.component";
import "./cardList.style.scss";

const CardList = ({ counter, difficultyClicked, cardUpdate }) => {
  let cardOne = false;
  let cardTwo = false;
  let cardThree = false;
  let cardFour = false;

  const cardOneHandler = (e) => {
    switch (true) {
      case e:
        return difficultyHandler((cardOne = true));
      default:
        return false;
    }
  };
  const cardTwoHandler = (e) => {
    switch (true) {
      case e:
        return difficultyHandler((cardTwo = true));
      default:
        return false;
    }
  };
  const cardThreeHandler = (e) => {
    switch (true) {
      case e:
        return difficultyHandler((cardThree = true));
      default:
        return false;
    }
  };
  const cardFourHandler = (e) => {
    switch (true) {
      case e:
        return difficultyHandler((cardFour = true));
      default:
        return false;
    }
  };
  const difficultyHandler = (e) => {
    switch (true) {
      case cardOne && cardTwo && cardThree && cardFour:
        return difficultyClicked(true);
      default:
        return difficultyClicked(false);
    }
  };

  return (
    <div className="card-list-wrap">
      <div className="span-wrap">
        <span>Choose your difficulty</span>
        <hr />
      </div>
      <div className="card-list">
        <Card
          key={1}
          turn={counter >= 60 ? true : false}
          name={"card1"}
          cardDiffClicked={cardOneHandler}
        />
        <Card
          key={2}
          turn={counter >= 45 ? true : false}
          card={"card2"}
          cardDiffClicked={cardTwoHandler}
        />
        <Card
          key={3}
          turn={counter >= 30 ? true : false}
          cardDiffClicked={cardThreeHandler}
        />
        <Card
          key={4}
          turn={counter >= 15 ? true : false}
          cardDiffClicked={cardFourHandler}
        />
      </div>
    </div>
  );
};

export default CardList;
