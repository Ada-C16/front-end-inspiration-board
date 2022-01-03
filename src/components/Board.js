import React from "react";
import Card from './Card'

const Board = () => {
  return (
    <div>
      <h1>Cards for Board</h1>
      {/* get all cards that belong to a board
      store cards in a list
      loop over that list to create the card components */}
      <Card />
      <h2>Create a new Card</h2>
      <form>
        <label>message</label>
        <input type="text"></input>
        <p>Preview</p>
        <button type="submit">Submit message</button>
      </form>
      
    </div> 
  )
}


export default Board;