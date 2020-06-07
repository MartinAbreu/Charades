import React, { PureComponent } from "react";
import invertLogo from "../../images/inverted.png.png";
import EasyWord from "../words/easyWords";
import MediumWord from "../words/mediumWords";
import HardWord from "../words/hardWords";

import "./card.style.scss";
import WORD_LIST from "../../pages/game/words";

class Card extends PureComponent {
  constructor(props) {
    super(props);

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

  cardHasBeenClicked = (e) => {
    switch (true) {
      case e:
        return this.props.cardDiffClicked(true);
      default:
        return this.props.cardDiffClicked(false);
    }
  };

  render() {
    const { easyHidden, mediumHidden, hardHidden } = this.state;

    return (
      <div className="container">
        <div className="btn-container">
          <button
            className={`btn Easy ${
              this.state.buttonDisable ? "disableBtn" : null
            }`}
            onClick={() => {
              this.toggleClass("easyHidden");
              this.setState({
                wordList: WORD_LIST,
                setDifficulty: "Easy",
                buttonDisable: true,
              });
              this.cardHasBeenClicked(true);
            }}
          >
            Easy
          </button>
          <button
            className={`btn Medium ${
              this.state.buttonDisable ? "disableBtn" : null
            }`}
            onClick={() => {
              this.toggleClass("mediumHidden");
              this.setState({
                wordList: WORD_LIST,
                setDifficulty: "Medium",
                buttonDisable: true,
              });
              this.cardHasBeenClicked(true);
            }}
          >
            Medium
          </button>
          <button
            className={`btn Hard ${
              this.state.buttonDisable ? "disableBtn" : null
            }`}
            onClick={() => {
              this.toggleClass("hardHidden");
              this.setState({
                wordList: WORD_LIST,
                setDifficulty: "Hard",
                buttonDisable: true,
              });
              this.cardHasBeenClicked(true);
            }}
          >
            Hard
          </button>
        </div>
        <hr />
        <div className="card-container">
          <div
            className={`back ${!this.props.turn ? "turnback" : "backtrans"}`}
          >
            <span className={`difficulty ${this.state.setDifficulty}`}>
              {this.state.setDifficulty}
            </span>
            <div className="words">
              <span className={`word ${!easyHidden ? "hidden" : null}`}>
                <EasyWord />
              </span>
              <span className={`word ${!mediumHidden ? "hidden" : null}`}>
                <MediumWord />
              </span>
              <span className={`word ${!hardHidden ? "hidden" : null}`}>
                <HardWord shouldCardUpdate={this.props.cardUpdate} />
              </span>
            </div>
          </div>
          <div className={`front ${!this.props.turn ? "turnfront" : null}`}>
            <img className="frontTitle" src={invertLogo} alt="logo"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
