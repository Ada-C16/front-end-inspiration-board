import React from "react";
import Board from "./Board";
import Card from "./Card";


const Forms = (props) => {
  return (
    <div className = "forms-component">
      <Board onBoardSelect={props.onBoardSelect}/>
      <Card cardMessage = {props.cardMessage} 
            inputCardMessage = {props.inputCardMessage} 
            submitNewCard = {props.submitNewCard}
            sortCards = {props.sortCards}/>
    </div>
  );
};

export default Forms;
