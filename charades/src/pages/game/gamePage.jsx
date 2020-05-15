import React from "react";
import CardList from "../../components/card-list/cardList.component";

import "./gamePage.style.scss";

class GamePage extends React.Component {
  constructor() {
    super();

    this.state = {
      words: ["laugh", "cry", "yell", "mad"],
    };
  }

  render() {
    return (
      <div>
        <CardList count={this.state.words} />
      </div>
    );
  }
}

export default GamePage;
