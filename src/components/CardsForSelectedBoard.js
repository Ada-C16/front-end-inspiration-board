import React from "react";
import Card from "./Card";
import  "./CardsForSelectedBoard.css"

const CardsForPickMeUpQuotes = (props) => {
  
  const cardlist  = props.cardListData.map((card, key) => {
    return <Card key = {key} message ={card.message} likesCount={card.likesCount}  />

  }).reverse()
  
  
  return (
  <div>

    <h3 className='cardsFor '>Cards For {props.title} </h3>
    <div>{cardlist}</div>

  
  </div>

  );
};

export default CardsForPickMeUpQuotes;
