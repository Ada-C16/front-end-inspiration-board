import Card from "./Card";

const CardsList = (props) => {
  const allCards = props.allCards;
  const deleteCardCallback = props.deleteCardCallback;

  return (
    <div>
      <h2>Cards</h2>
      {allCards.map((card) => (
<<<<<<< HEAD
        <Card
          key={card.card_id}
          singleCard={card}
          deleteCardCallback={deleteCardCallback}
        />
=======
        <Card key={card.card_id} singleCard={card} deleteCardCallback={deleteCardCallback} />
>>>>>>> f1c330c929d10a8361e485dfa26a440262336959
      ))}
    </div>
  );
};

export default CardsList;
