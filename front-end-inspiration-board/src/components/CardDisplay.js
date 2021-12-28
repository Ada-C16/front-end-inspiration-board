import React from "react";
import Card from "./Card";

const CardDisplay = (props) => {
  const cardComponents = [];
  if (props.cardList) {
    for (let card of props.cardList) {
      cardComponents.push(<Card cardMessage={card.message} />);
    }
  }

  return (
    <section className="card-display-block grid-block">
      <h1>Card Displayy</h1>
      {cardComponents}
    </section>
  );
};

export default CardDisplay;
