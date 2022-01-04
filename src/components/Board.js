import React from "react";
import Card from './Card'
import NewCardForm from "./NewCardForm";

const Board = () => {
 
  return (
    <div>
      <h1>Cards for Board</h1>
      {/* get all cards that belong to a board
      store cards in a list
      loop over that list to create the card components */}
      <Card />
      <NewCardForm/>

      
    </div> 
  )
}


export default Board;