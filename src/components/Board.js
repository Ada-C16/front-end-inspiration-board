import React, { useState, useEffect } from "react";
import axios from "axios";
import CardsList from "./CardsList";
import Card from "./Card";

const Board = (props) => {
  const boards = props.boards;
  console.log(boards);
  return (
    <div>
      <h2>Select a board</h2>
      {boards.map((board) => (
        <h3>{board.title}</h3>
      ))}
    </div>
  );
};

// const Board = () => {
//   const [cards, showCards] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000")
//       .then((response) => {
//         showCards(response.data.cards);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div className="board container p-1">
//       <CardsList myCards={cards} />
//     </div>
//   );
// };

export default Board;
