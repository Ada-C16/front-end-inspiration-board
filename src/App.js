import { useState, useEffect } from "react";
import "./App.css";
import Boards from "./components/Boards";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";

const CARDS = [
  {
    card_id: 1,
    message: "a message",
    likes_count: 0,
    board_id: 1,
  },
  {
    card_id: 2,
    message: "a message 2",
    likes_count: 1,
    board_id: 1,
  },
  {
    card_id: 3,
    message: "a message 3",
    likes_count: 2,
    board_id: 2,
  },
];

function App() {
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentCards, setCurrentCards] = useState([]);

  useEffect(() => {
    // TODO make API call instead of using constant CARDS
    if (currentBoard) {
      setCurrentCards(
        CARDS.filter((card) => card.board_id === currentBoard.board_id)
      );
    }
  }, [currentBoard]);

  return (
    <main>
      <div className="App header-container">
        <h1> Inspiration Board </h1>
        <Boards setCurrentBoard={setCurrentBoard} />
        {currentBoard && (
          <NewCardForm
            board={currentBoard}
            createCard={(message) => {
              setCurrentCards((prevCards) => [
                ...prevCards,
                {
                  card_id:
                    Math.max(...CARDS.map((card) => parseInt(card.card_id))) +
                    1,
                  message: message,
                  likes_count: 0,
                  board_id: currentBoard.board_id,
                },
              ]);
            }}
          />
        )}
        </div>
        
        <div className="card-list-container">   
          <div>
            {currentBoard && (
            <CardList
              currentBoard={currentBoard}
              currentCards={currentCards}
              setCurrentCards={setCurrentCards}
            />
          )}
          </div>
        </div>

    </main>
  );
}

export default App;
