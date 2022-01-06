import PropTypes from "prop-types";
import Card from "./Card";
import "./CardList.css";
// "card" and {card} generally refer to the data being passed through props
// while Card is the component and component file
const CardList = ({ cards, onIncreaseLikes, onDeleteOneCard }) => {
  return (
    
    <div className="card-container">
      {/* using map function to iterate through list of cards and create a new
             html Card element for each card  */}
      {cards.map((card) => {
        return (
          <div >
          <Card 
            key={card.id}
            card={card}
            onIncreaseLikes={onIncreaseLikes}
            onDeleteOneCard={onDeleteOneCard}
          />
          </div>
        );
      })}
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onIncreaseLikes: PropTypes.func.isRequired,
  onDeleteOneCard: PropTypes.func.isRequired,
};

export default CardList;
