import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import CardList from "./components/CardList";
import NewBoard from "./components/NewBoard";
import NewCard from "./components/NewCard";

const cardData = {
  message: "card message text as string, still unchanged",
  likes_count: 1,
  card_id: 1,
};
const URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  // board state
  const [boardData, setBoardData] = useState([]);

  const getBoard = () => {
    axios
      .get(`${URL}/boards`)
      .then((response) => {
        console.log(response.data);
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
  const [selectBoard, setSelectBoard] = useState();

  const updateSelectBoard = (event) => {
    console.log("New board selected!");
    setSelectBoard(event.target.value);
    console.log(selectBoard);
  };

  return (
    <div className="App">
      <header className="App-header">Inspiration Board</header>
      <div className="App-board">
        <Board
          boardData={boardData}
          selectState={selectBoard}
          boardCallBack={updateSelectBoard}
        />
      </div>
      <div className="App-card">
        <CardList />
      </div>
      <div className="App-sidebar">
        <NewBoard />
        <NewCard />
      </div>
    </div>
  );
}

export default App;
