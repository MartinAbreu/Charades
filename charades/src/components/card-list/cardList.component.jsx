import React from "react";
import Card from "../card/card.component";
import "./cardList.style.scss";

const CardList = ({ words }) => (
  <div className="card-list">
    {words
      .filter((word, inx) => inx < 4)
      .map((word) => (
        <Card key={word} word={word} />
      ))}
    {console.log(words)}
  </div>
);

export default CardList;
