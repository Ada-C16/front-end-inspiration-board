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

const boardFakeData = {
  title: "title",
  owner: "tester",
  id: 1,
};

function App() {
  // board state
  const [boardData, setBoardData] = useState([]);
  // const [boardData, setBoardData] = useState(boardFakeData);

  // state to select board - default to empty
  const [selectBoard, setSelectBoard] = useState({
    title: "",
    owner: "",
    id: 1,
  });

  return (
    <div className="App">
      <header className="App-header">Inspiration Board</header>
      <div className="App-board">
        <Board {...boardData} />
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
