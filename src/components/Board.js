import React from "react";

const Board = ({ board, getCards }) => {
  return (
    <li>
      {board.title} by {board.owner}. Board ID: {board.board_id}
      <button onClick={() => getCards(board.board_id)}>See cards</button>
    </li>
  );
};

export default Board;
