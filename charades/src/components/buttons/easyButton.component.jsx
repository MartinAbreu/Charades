import React, { useState, useEffect } from "react";
import WORD_LIST from "../../pages/game/words";
import Card from "../card/card.component";
import GamePage from "../../pages/game/gamePage";

const Easy = (difficulty) => {
  return (
    <button className="easyButton" onClick={difficulty}>
      Easy
    </button>
  );
};

export default Easy;
