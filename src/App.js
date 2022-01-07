import React, { useState } from "react";
import Board from "./components/Board";
import SidePanel from "./components/SidePanel";
import axios from "axios";

function App() {
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cards, setCards] = useState([]);

  const onSelectBoard = (event) => {
    setSelectedBoard(event.target.value);
  };

  const onDisplayBoard = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard}/cards`)
      .then((response) => {
        console.log(response);
        const responseCards = response.data.cards;
        let cardsList = [];
        for (let card of responseCards) {
          let newCard = {};
          newCard.boardId = card.board_id;
          newCard.cardId = card.card_id;
          newCard.message = card.message;
          newCard.likesCount = card.likes_count;
          cardsList.push(newCard);
        }
        console.log(cardsList);
        setCards(cardsList);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <SidePanel
        className="sidepanel"
        onSelectBoard={onSelectBoard}
        selectedBoard={selectedBoard}
        onDisplayBoard={onDisplayBoard}
      />
      <Board
        className="board"
        setCards={setCards}
        cards={cards}
        selectedBoard={selectedBoard}
      />
    </div>
  );
}

export default App;
