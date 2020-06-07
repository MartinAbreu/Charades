import React, { PureComponent } from "react";
import WORD_LIST from "../../pages/game/words";

class EasyWord extends PureComponent {
  constructor() {
    super();

    this.state = {
      easyWords: WORD_LIST[0].words,
    };
  }

  render() {
    const { easyWords } = this.state;
    const easyWord = easyWords
      .sort(() => 0.5 - Math.random())
      .splice(0, 1)
      .slice(0, 1);
    return <div>{easyWord}</div>;
  }
}

export default EasyWord;
