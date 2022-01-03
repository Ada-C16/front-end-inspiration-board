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
  onSelectSortTypes,
  sortTypes,
}) => {
  return (
    <div>
      <NewCardForm onAddCard={onAddCard} />
      <CurrentBoard board={board} />

      {/* sort message option */}
      <select onChange={(e) => onSelectSortTypes(e.target.value)}>
        {sortTypes.map((sortType, i) => {
          return (
            <option key={i} value={sortType}>
              Sort by {sortType}
            </option>
          );
        })}
      </select>

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
  onSelectSortTypes: PropTypes.func.isRequired,
  sortTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LowerBody;
