import { useState, useEffect } from "react";
import "./App.css";
import Boards from "./components/Boards";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";
import axios from "axios";

// const CARDS = [
//   {
//     card_id: 1,
//     message: "a message",
//     likes_count: 0,
//     board_id: 1,
//   },
//   {
//     card_id: 2,
//     message: "a message 2",
//     likes_count: 1,
//     board_id: 1,
//   },
//   {
//     card_id: 3,
//     message: "a message 3",
//     likes_count: 2,
//     board_id: 2,
//   },
// ];

function App() {
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentCards, setCurrentCards] = useState([]);

  const backendURL = process.env["REACT_APP_BACKEND_URL"];
  useEffect(() => {
    // TODO make API call instead of using constant CARDS
    if (currentBoard) {
      fetchCardsForBoard();
    }
  }, [currentBoard]);

  const createNewCard = (message) => {
    axios
      .post(`${backendURL}/cards`, {
        message: message,
        likes_count: 0,
        board_id: currentBoard.id,
      })
      .then((response) => {
        console.log(
          `Success creating boards: ${JSON.stringify(response.data)}`
        );
        fetchCardsForBoard();
      })
      .catch((error) => {
        console.error(`Error getting boards: ${error}`);
      });
  };

  function fetchCardsForBoard() {
    axios
      .get(`${backendURL}/boards/${currentBoard.id}/cards`)
      .then((response) => {
        console.log(`Success getting cards: ${JSON.stringify(response.data)}`);
        setCurrentCards(
          response.data.cards.sort((card1, card2) => card1.id - card2.id)
        );
      })
      .catch((error) => {
        console.error(`Error getting cards: ${error}`);
      });
  }

  return (
    <main>
      <div className="App header-container">
        <h1> Inspiration Board </h1>
        <Boards currentBoard={currentBoard} setCurrentBoard={setCurrentBoard} />
        {currentBoard && (
          <NewCardForm board={currentBoard} createCard={createNewCard} />
        )}
      </div>

      <div className="card-list-container">
        <div>
          {currentBoard && (
            <CardList
              currentBoard={currentBoard}
              currentCards={currentCards}
              fetchCardsForBoard={fetchCardsForBoard}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
