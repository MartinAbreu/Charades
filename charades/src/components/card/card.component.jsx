import React from "react";

import "./card.style.scss";

const Card = ({ word }) => (
  <div className="card-container">
    <span className="difficulty">Easy</span>
    <span className="word">{word}</span>
  </div>
);

export default Card;
