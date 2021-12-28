import React from "react";
import Card from "./Card";


//when is this called?
const CardDisplay = (props) => {
  const cardComponents = props.updateCardDisplayCallback(props.cardList)

  return (
    <section className="card-display-block grid-block">
      <h1>{props.currentBoard.title} by {props.currentBoard.owner}</h1>
      {console.log(props.currentBoard)}
      {cardComponents}
    </section>
  );
};

export default CardDisplay;
