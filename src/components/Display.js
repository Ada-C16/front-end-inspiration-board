import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

const Display = (props) => {
  // get request for cards specific to a board
  // boards/id
  // display focuses on arrangement of cards (for loop to
  // + generate all cards for this board)
  // cards component to structure card (like, delete)
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/{props.id}`)
      .then((response) => {
        setCards(response.data);
      });
  }, []);

  useEffect(() => {
    const cardlist = cards.map((card, i) => {
      return (
        <Cards
          id={card.id}
          message={card.message}
          likes_count={card.likes_count}
        />
      );
    });
    setCards(cardlist);
  }, [cards]);

  return (
    <div>
      <h2>
        {props.title} - {props.owner}
      </h2>
      <div className="cards-display">{cards}</div>
    </div>
  );
};

export default Display;
