import React from "react";
import './Board.css'

const Board = (props) => {
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