import React, { useState, useEffect } from "react";
import Board from "./Board";

const BoardsList = (props) => {
  const boards = props.boards;
  const onSelectedBoard = props.onSelectedBoard;
  return (
    <div className="boards-list text-center">
      <h2>Select a board</h2>
      {boards.map((board) => (
        <Board singleBoard={board} onSelectedBoard={onSelectedBoard} />
      ))}
    </div>
  );
};

export default BoardsList;
