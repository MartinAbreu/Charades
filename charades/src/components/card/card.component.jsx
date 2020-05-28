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
      setDifficulty: "",
      buttonDisable: false,
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
        <div className="btn-container">
          <button
            className={`btn ${this.state.buttonDisable ? "disableBtn" : null}`}
            onClick={() => {
              this.toggleClass("easyHidden");
              this.setState({ setDifficulty: "Easy", buttonDisable: true });
            }}
          >
            Easy
          </button>
          <button
            className={`btn ${this.state.buttonDisable ? "disableBtn" : null}`}
            onClick={() => {
              this.toggleClass("mediumHidden");
              this.setState({ setDifficulty: "Medium", buttonDisable: true });
            }}
          >
            Medium
          </button>
          <button
            className={`btn ${this.state.buttonDisable ? "disableBtn" : null}`}
            onClick={() => {
              this.toggleClass("hardHidden");
              this.setState({ setDifficulty: "Hard", buttonDisable: true });
            }}
          >
            Hard
          </button>
        </div>
        <hr />
        <div className="card-container">
          <div
            className={`back ${
              easyHidden || hardHidden || mediumHidden
                ? "turnback"
                : "backtrans"
            }`}
          >
            <span className={`difficulty ${this.state.setDifficulty}`}>
              {this.state.setDifficulty}
            </span>
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
          <div
            className={`front ${
              easyHidden || hardHidden || mediumHidden ? "turnfront" : null
            }`}
          >
            <img className="frontTitle" src={invertLogo} alt="logo"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
