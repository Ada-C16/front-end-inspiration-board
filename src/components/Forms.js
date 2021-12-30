import React from "react";
import Board from "./Board";
import Card from "./Card";
import "./Forms.css"

const Forms = (props) => {
  return (
    <div className = "forms-component">
      <Board onBoardSelect={props.onBoardSelect}/>
      <Card currentBoard = {props.currentBoard}/>
    </div>
  );
};

export default Forms;
