import React from "react";
import CardList from "../../components/card-list/cardList.component";

import "./gamePage.style.scss";
import Header from "../../components/header/header";
import Timer from "../../components/timer/timer";

class GamePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 60,
      difficultyClicked: false,
      cardListKey: 0,
      updateCard: false,
    };
  }

  changeHandler = (timerCount) => {
    switch (true) {
      case timerCount != null:
        this.setState({ counter: timerCount });
        break;
      default:
        return null;
    }
  };

  difficultyHandler = (difficultyClicked) => {
    switch (true) {
      case difficultyClicked:
        this.setState({ difficultyClicked: difficultyClicked });
        break;
      default:
        return null;
    }
  };

  startOverHandler = (startOver) => {
    switch (true) {
      case startOver:
        this.setState({
          cardListKey: this.state.cardListKey + 1,
          updateCard: true,
          counter: 60,
          difficultyClicked: false,
        });
        break;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="game-page-container">
        <div className="header-logo">
          <Header />
          <Timer
            changeParentCounter={this.changeHandler}
            difficultyClicked={this.state.difficultyClicked}
            startOver={this.startOverHandler}
          />
        </div>
        <CardList
          key={this.state.cardListKey}
          counter={this.state.counter}
          reset={this.state.resetCard}
          difficultyClicked={this.difficultyHandler}
          cardUpdate={this.state.updateCard}
        />
      </div>
    );
  }
}

export default GamePage;
