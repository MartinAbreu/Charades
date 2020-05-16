import React from "react";
import invertLogo from "../../images/inverted.png.png";

import "./card.style.scss";

const Card = ({ word }) => (
  <div className="card-container">
    <div className="back">
      <span className="difficulty">Easy</span>
      <span className="word">{word}</span>
    </div>
    <div className="front">
      <img className="frontTitle" src={invertLogo} alt="logo"></img>
    </div>
  </div>
);

export default Card;
git