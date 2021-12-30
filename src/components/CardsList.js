import axios from "axios";
import React, { useState, useEffect } from "react";
import Board from "./Board";
import Card from "./Card";

const CardsList = (props) => {
  const allCards = props.allCards;
  // const [cardsData, setCardsData] = useState([]);

  // const selectedBoard = props.selectedBoard;
  // console.log(selectedBoard);
  // // gives you selected ID board

  // useEffect(() => {
  //   axios
  //     .get("https://team-lovelace-api.herokuapp.com/boards/1/cards")
  //     .then((response) => {
  //       console.log(response.data);
  //       setCardsData([...response.data]);
  //     })
  //     .catch((err) => console.log(err));
  // }, [selectedBoard]);

  return (
    <div>
      <h2>Cards</h2>
      {allCards.map((card) => (
        <Card singleCard={card} />
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
