import React from "react";

const Board = ({ board, getCards }) => {
  return (
    <li>
      {board.title} by {board.owner}
      <button onClick={() => getCards(board.board_id)}>See cards</button>
    </li>
  );
};

export default Board;
