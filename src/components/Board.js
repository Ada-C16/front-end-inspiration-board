import React from "react";
import Card from './Card'
import NewCardForm from "./NewCardForm";
import './Board.css'

const Board = () => {
 
  return (
    <div className="cardsDisplay">
      <section className="cards">
        <h2>Cards for Name of Board</h2>
        {/* get all cards that belong to a board
        store cards in a list
        loop over that list to create the card components */}
          <Card />
      </section>
        <NewCardForm />
    </div> 
  )
}


export default Board;