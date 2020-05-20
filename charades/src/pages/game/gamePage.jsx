import React from "react";
import CardList from "../../components/card-list/cardList.component";
import WORD_LIST from "./words";
import Easy from "../../components/buttons/easyButton.component";

import "./gamePage.style.scss";
import Header from "../../components/header/header";

class GamePage extends React.Component {
  constructor() {
    super();

    this.state = {
      wordList: WORD_LIST,
    };
  }

  render() {
    const { wordList } = this.state;
    //Randomly get words from array
    const cardCount = wordList[0].words
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    return (
      <div>
        <Header />
        <CardList cardCount={cardCount} />
      </div>
    );
  }
}

export default GamePage;
