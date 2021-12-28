import "./App.css";
import Board from "./components/Board";
import Card from "./components/Card";
import NewBoardForm from "./components/NewBoardForm";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewCardForm from "./components/NewCardForm";

function App() {
  const [boardsData, setBoardsData] = useState([]);

  const addNewBoard = (newBoard) => {
    const newBoardList = [...boardsData];

    const nextBoardId =
      Math.max(...newBoardList.map((board) => board.board_id)) + 1;

    newBoardList.push({
      board_id: nextBoardId,
      title: newBoard.titleData,
      owner: newBoard.ownerData,
    });

    setBoardsData(newBoardList);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/boards")
      .then((response) => {
        console.log(response.data);
        setBoardsData([...response.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Lovelace's Inspiration Boards</h1>
      </header>
      <main>
        <NewBoardForm addBoardCallback={addNewBoard} />
        <Board boards={boardsData} />
      </main>
    </div>
  );
}

export default App;
