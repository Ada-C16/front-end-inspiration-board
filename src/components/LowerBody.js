import NewCardForm from "./NewCardForm";
import CurrentBoard from "./CurrentBoard";
import CardList from "./CardList";
// list of props being received from app.js
const LowerBody = ({ onAddCard, board, cards, onIncreaseLikes }) => {
  return (
    <div>
      <NewCardForm onAddCard={onAddCard} />
      <CurrentBoard board={board} />
      <CardList cards={cards} onIncreaseLikes={onIncreaseLikes} />
    </div>
  );
};
export default LowerBody;
