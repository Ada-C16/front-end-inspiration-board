import React from "react";

const Board = ({ board, onClick }) => {
  return (
    <li>
      {board.title} by {board.owner}
      <button onClick={() => onClick(board.board_id)}>See cards</button>
    </li>
  );
};

export default Board;
