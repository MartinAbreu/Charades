import React from "react";
import invertLogo from "../../images/inverted.png.png";

import "./card.style.scss";
import WORD_LIST from "../../pages/game/words";

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      wordList: WORD_LIST,
      easyHidden: false,
      mediumHidden: false,
      hardHidden: false,
      currentState: false,
    };
  }

  toggleClass = (e) => {
    const { currentState } = this.state;
    this.setState({ wordList: WORD_LIST, [e]: !currentState });
  };

  render() {
    const { wordList, easyHidden, mediumHidden, hardHidden } = this.state;

    //Randomly get words from array
    const easyWords = wordList[0].words
      .sort(() => 0.5 - Math.random())
      .splice(0, 1)
      .slice(0, 1);

    const mediumWords = wordList[1].words
      .sort(() => 0.5 - Math.random())
      .splice(0, 1)
      .slice(0, 1);

    const hardWords = wordList[2].words
      .sort(() => 0.5 - Math.random())
      .splice(0, 1)
      .slice(0, 1);

    return (
      <div className="container">
        <button
          className="easyBtn btn"
          onClick={() => this.toggleClass("easyHidden")}
        >
          Easy
        </button>
        <button
          className="medBtn btn"
          onClick={() => this.toggleClass("mediumHidden")}
        >
          Medium
        </button>
        <button
          className="hardBtn btn"
          onClick={() => this.toggleClass("hardHidden")}
        >
          Hard
        </button>
        <div className="card-container">
          <div className="back">
            <span className="difficulty">Easy</span>
            <div className="words">
              <span className={`word ${!easyHidden ? "hidden" : null}`}>
                {easyWords}
              </span>
              <span className={`word ${!mediumHidden ? "hidden" : null}`}>
                {mediumWords}
              </span>
              <span className={`word ${!hardHidden ? "hidden" : null}`}>
                {hardWords}
              </span>
            </div>
          </div>
          <div className="front">
            <img className="frontTitle" src={invertLogo} alt="logo"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
