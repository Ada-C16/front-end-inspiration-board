import axios from "axios";
import React, { useState, useEffect } from "react";
import Board from "./Board";
import Card from "./Card";

const CardsList = (props) => {
  const allCards = props.allCards;
  const deleteCardCallback = props.deleteCardCallback;

  return (
    <div>
      <h2>Cards</h2>
      {allCards.map((card) => (
        <Card singleCard={card} deleteCardCallback={deleteCardCallback} />
      ))}
    </div>
  );
};

// const CardsList=(props)=>{
//     return <div className="container">
//         {props.cards.map((c)=>{
//             <Card card={c}/>;
//         })}
//         <Card />
//     </div>;
// };

export default CardsList;
