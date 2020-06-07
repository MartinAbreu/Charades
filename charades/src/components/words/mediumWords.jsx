import React, { PureComponent } from "react";
import WORD_LIST from "../../pages/game/words";

class MediumWord extends PureComponent {
  constructor() {
    super();

    this.state = {
      mediumWords: WORD_LIST[1].words,
    };
  }

  render() {
    const { mediumWords } = this.state;
    const mediumWord = mediumWords
      .sort(() => 0.5 - Math.random())
      .splice(0, 1)
      .slice(0, 1);
    return <div>{mediumWord}</div>;
  }
}

export default MediumWord;
