import "./App.css";
import BoardsList from "./components/BoardsList";
import Card from "./components/Card";
import NewBoardForm from "./components/NewBoardForm";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewCardForm from "./components/NewCardForm";
import CardsList from "./components/CardsList";

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState([]);
  const [cardsData, setCardsData] = useState([]);

  const selectBoard = (board) => {
    setSelectedBoard(board);
    console.log(board);
    let cardsEndpoint =
      process.env.REACT_APP_BACKEND_URL + "/" + board.board_id + "/cards";
    axios
      .get(cardsEndpoint)
      .then((response) => {
        console.log(response.data);
        setCardsData([...response.data]);
      })
      .catch((err) => console.log(err));
  };

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
      .get(process.env.REACT_APP_BACKEND_URL)
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

        <BoardsList boards={boardsData} onSelectedBoard={selectBoard} />
        <CardsList allCards={cardsData} />
      </main>
    </div>
  );
}

export default App;
