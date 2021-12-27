import React, { useState, useEffect } from "react";
import axios from "axios";
import CardsList from "./CardsList";
import Card from "./Card";

const Board = () => {
  const [cards, showCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((response) => {
        showCards(response.data.cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="board container p-1">
      <CardsList myCards={cards} />
    </div>
  );
};

export default Board;
