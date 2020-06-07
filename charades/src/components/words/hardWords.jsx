import React, { PureComponent } from "react";
import WORD_LIST from "../../pages/game/words";

class HardWord extends PureComponent {
  constructor() {
    super();

    this.state = {
      hardWords: WORD_LIST[2].words,
    };
  }

  render() {
    const { hardWords } = this.state;
    const hardWord = hardWords
      .sort(() => 0.5 - Math.random())
      .splice(0, 1)
      .slice(0, 1);
    return <div>{hardWord}</div>;
  }
}

export default HardWord;
