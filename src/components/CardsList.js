import Card from "./Card";

const CardsList = (props) => {
  const allCards = props.allCards;
  const deleteCardCallback = props.deleteCardCallback;

  return (
    <div>
      <h2>Cards</h2>
      {allCards.map((card) => (
        <Card
          key={card.card_id}
          singleCard={card}
          deleteCardCallback={deleteCardCallback}
        />
      ))}
    </div>
  );
};

export default CardsList;
