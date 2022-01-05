import React from "react";
import Card from './Card'
import NewCardForm from "./NewCardForm";
import './Board.css'

const Board = (props) => {

  // Create an onclick event handler

  const onBoardIsSelected = (e) => {
    props.readSelectedBoard(e.target.value, props.title)
  }
 
  return (
    <option value={props.id} onClick={onBoardIsSelected}>
      {props.id}. {props.title}
    </option>
  )
}

export default Board;