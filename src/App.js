import { useState, useEffect } from "react";
import "./App.css";
import Boards from "./components/Boards";
import Card from "./components/Card";
import Board from "./components/Board";

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
        CARDS.filter((card) => card.board_id === currentBoard.id)
      );
    }
  }, [currentBoard]);

  return (
    <main>
      <div className="App">
        <h1> Inspiration Board </h1>
        <Boards setCurrentBoard={setCurrentBoard} />
        {currentBoard && (
          <Board
            config={currentBoard}
            currentCards={currentCards}
            setCurrentCards={setCurrentCards}
          />
        )}
      </div>
    </main>
  );
}

export default App;
