import React from "react";
import Card from './Card';

// const displayCard = (card) => {
//   return (
//     <Card
//       key={card.card_id}
//       id={card.card_id}
//       board_id={card.board_id}
//       message={card.message}
//     />
//   );
// };

const CardList = ({cards}) => {
  const displayCard = (card) => {
    return (
      <Card
        key={card.card_id}
        id={card.card_id}
        board_id={card.board_id}
        message={card.message}
      />
    );}
  return (
    <div className="cardList">
      <h2>Cards For</h2>
      {cards === undefined ? "" : <ul>{cards.map(displayCard)}</ul>}
    </div>
  );
};

// const CardList = () => {

//   return (
//     <div className="cardList">
//       {/* on a selected board make a get request
//       to get cards
//       pass card info as props into card components
//       create a function to turn card info into card components 
//        */}
//     </div> 
//   )
// }

export default CardList;