import Card from "./Card";
import "./CardsForSelectedBoard.css";

const CardsForPickMeUpQuotes = (props) => {
  
  const cardlist  = props.cardListData.reverse().map((card, key) => {
    return <Card key = {key} message ={card.message} likesCount={card.likesCount}  />

  return (
<<<<<<< HEAD
    <div>
      <h1 className="cardsFor">Cards For{props.title}</h1>
      <div>{cardlist}</div>
    </div>
=======
  <div>

    <h3 className='cardsFor'>Cards For</h3>
    <div>{cardlist}</div>

  
  </div>

>>>>>>> 6b97c33b03d18f71626b32809b7066a95e3f9239
  );
};

export default CardsForPickMeUpQuotes;
