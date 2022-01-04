import React from "react";
import Card from "./Card";
import  "./CardsForSelectedBoard.css"

<<<<<<< HEAD
const CardsForPickMeUpQuotes = (props) => {
  
  const cardlist  = props.cardListData.reverse().map((card, key) => {
    return <Card key = {key} message ={card.message} likesCount={card.likesCount}  />

  })
  
  
  return (
  <div>

    <h1 className='cardsFor'>Cards For</h1>
    <div>{cardlist}</div>

  
  </div>

  );
=======
const CardsForSelectedBoard = () => {
  return <h1>I should only appear after an onClick event</h1>;
>>>>>>> 1af25dee80774d92236fcd0b991f6afe588903c2
};

export default CardsForSelectedBoard;
