import React from "react";
import Card from "./Card";

const CardList = ({ cards }) => {
  let card_components_list;
  if (cards.length === 0) {
    card_components_list = "No cards for this board yet.";
  } else {
    card_components_list = cards.map((card) => {
      return <Card key={card.card_id} card={card} />;
    });
  }

  return (
    <section>
      <h1>Cards</h1>
      <ul>{card_components_list}</ul>
    </section>
  );
};

export default CardList;
