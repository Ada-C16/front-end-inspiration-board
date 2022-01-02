import NewCardForm from "./NewCardForm";
import CurrentBoard from "./CurrentBoard";
import CardList from "./CardList";
import PropTypes from "prop-types";

// list of props being received from app.js
const LowerBody = ({
  onAddCard,
  board,
  cards,
  onIncreaseLikes,
  onDeleteOneCard,
}) => {
  return (
    <div>
      <NewCardForm onAddCard={onAddCard} />
      <CurrentBoard board={board} />
      <CardList
        cards={cards}
        onIncreaseLikes={onIncreaseLikes}
        onDeleteOneCard={onDeleteOneCard}
      />
    </div>
  );
};

LowerBody.propTypes = {
  onAddCard: PropTypes.func.isRequired,
  board: PropTypes.object.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onIncreaseLikes: PropTypes.func.isRequired,
  onDeleteOneCard: PropTypes.func.isRequired,
};

export default LowerBody;
