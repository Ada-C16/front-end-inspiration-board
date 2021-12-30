import React, { useState, useEffect } from "react";

const Board = (props) => {
  const boardTitle = props.singleBoard.title;
  const board = props.singleBoard;
  const onSelectedBoard = props.onSelectedBoard;
  return (
    <div onClick={() => onSelectedBoard(board)}>
      <h3>{boardTitle}</h3>
    </div>
  );
};

export default Board;
