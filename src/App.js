import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import CardList from "./components/CardList";
import NewBoard from "./components/NewBoard";
import NewCard from "./components/NewCard";

const URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  // board state
  const [boardData, setBoardData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const getBoard = () => {
    axios
      .get(`${URL}/boards`)
      .then((response) => {
        const newBoards = response.data.map((board) => {
          return {
            title: board.title,
            owner: board.owner,
            board_id: board.board_id,
          };
        });
        setBoardData(newBoards);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(getBoard, []);

  // state to select board - default to empty
  const [selectBoard, setSelectBoard] = useState(null);

  const addBoard = (board) => {
    axios
      .post(`${URL}/boards`, {
        title: board.title,
        owner: board.owner,
      })
      .then((response) => {
        const newBoard = response.data;
        const newBoardList = [...boardData, newBoard];
        setBoardData(newBoardList);
        setErrorMessage(null);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      });
  };

  const [cards, setCards] = useState([]);
  const addCard = (card) => {
    axios
      .post(`${URL}/boards/${selectBoard.board_id}/cards`, {
        message: card.message,
      })
      .then((response) => {
        const newCard = response.data;
        const newCardList = [...cards, newCard];
        setCards(newCardList);
        setErrorMessage(null);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      });
  };

  useEffect(() => {
    if (selectBoard) {
      getCards(selectBoard.board_id);
    }
  }, [selectBoard]);

  const getCards = (board_id) => {
    axios
      .get(`${URL}/boards/${board_id}/cards`)
      .then((response) => {
        const newCards = response.data;
        setCards(newCards);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <div className="App-board">
        <Board
          boardData={boardData}
          selectBoard={selectBoard}
          boardCallBack={setSelectBoard}
        />
      </div>
      <div className="App-card">
        <CardList cards={cards} setCards={setCards} />
      </div>
      <div className="App-sidebar">
        <NewBoard onSubmitCallBack={addBoard} />
        <NewCard onSubmitCallBack={addCard} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default App;
