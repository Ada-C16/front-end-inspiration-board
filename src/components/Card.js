import PropTypes from "prop-types";

// card and likes are the props we are recieving
const Card = ({ card, onIncreaseLikes, onDeleteOneCard }) => {
  return (
    // div might be a good choice for this container
    // which would include button, span, button
    <div>
      <p>{card.message}</p>
      {/* +1 button is listening for the user to click, onIncreaseLikes has to be wrapped in () and
        anonymous function or it will get called every time the page renders*/}
      <button onClick={() => onIncreaseLikes(card)}> + 1</button>
      <span> {card.likes}</span>
      <button onClick={() => onDeleteOneCard(card)}>Delete</button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    board_id: PropTypes.number.isRequired,
  }).isRequired,
  onIncreaseLikes: PropTypes.func.isRequired,
  onDeleteOneCard: PropTypes.func.isRequired,
};

export default Card;
