import React from "react";
import Board from "./Board";

const BoardList = ({ boards, getCards }) => {
  const board_components_list = boards.map((board) => {
    return <Board key={board.board_id} board={board} getCards={getCards} />;
  });

  return (
    <section>
      <h1>Boards</h1>
      <ul>{board_components_list}</ul>
    </section>
  );
};

export default BoardList;
