import React from "react";
import Board from "./Board";
import Card from "./Card";

const Forms = (props) => {
  return (
    <div>
      <Board onBoardSelect={props.onBoardSelect}/>
      <Card currentBoard = {props.currentBoard}/>
    </div>
  );
};

export default Forms;
