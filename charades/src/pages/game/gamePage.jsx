import React from "react";
import CardList from "../../components/card-list/cardList.component";
import WORD_LIST from "./words";
import Timer from "../../components/timer/timer";

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
    const easyWords = wordList[0].words
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    const mediumWords = wordList[1].words
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    const hardWords = wordList[2].words
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    return (
      <div>
        <Header />
        <CardList words={easyWords} {...wordList} />
        <div className="btn">
          
        </div>
      </div>
    );
  }
}

export default GamePage;
