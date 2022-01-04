const Board = (props) => {
  const boardTitle = props.singleBoard.title;
  const board = props.singleBoard;
  const onSelectedBoard = props.onSelectedBoard;
<<<<<<< HEAD
=======
  //const [cardsData, setCardsData] = useState([]);

  // const addNewCard = (newCard) => {
  //   const newCardList = [...cardsData];

  //   const nextCardId = Math.max(...newCardList.map((card) => card.card_id)) + 1;

  //   newCardList.push({
  //     card_id: nextCardId,
  //     message: newCard.messageData,
  //   });

  //   setCardsData(newCardList);
  // };
>>>>>>> f1c330c929d10a8361e485dfa26a440262336959

  return (
    <div
      class="p-3 mb-2 bg-info text-white"
      onClick={() => onSelectedBoard(board)}
    >
      <h5>{boardTitle}</h5>
    </div>
  );
};

export default Board;
