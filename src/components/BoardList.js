import React from "react";
import Board from "./Board";

const BoardList = ({ boards, onClick }) => {
  const board_components_list = boards.map((board) => {
    return <Board key={board.board_id} board={board} onClick={onClick} />;
  });

  return (
    <section>
      <h1>Boards</h1>
      <ul>{board_components_list}</ul>
    </section>
  );
};

export default BoardList;
