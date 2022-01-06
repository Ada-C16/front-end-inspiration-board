import "./App.css";
import Card from "./components/Card.js";
import NewCard from "./components/NewCard.js";
import NewBoardForm from "./components/NewBoardForm.js";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList.js";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const URL = "https://inspiration-board-backend.herokuapp.com";

  const [boards, setBoards] = useState([]);

  const addBoard = (board) => {
    console.log(board);

    axios
      .post(URL + "/boards", board)
      .then((response) => {
        getBoards();
        console.log(response.data);
      })
      .catch((error) => console.log(error.response.data));
  };

  const getBoards = () => {
    axios
      .get(URL + "/boards")
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => console.log(error.response.data));
  };

  useEffect(() => {
    getBoards();
  }, []);

  const getCards = (board_id) => {
    console.log(`You clicked on board ${board_id}`);
    axios
      .get(URL + `/boards/${board_id}/cards`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response.data));
  };

  const addCard = (card) => {
    console.log(card);

    axios
      .post(URL + "/boards/" + card.board_id + "/cards", card)
      .then(
        (response) => console.log(response.data)
        // getTasks()
      )
      .catch((error) => console.log(error.response.data));
  };

  return (
    <div className="App">
      <BoardList boards={boards} getCards={getCards} />
      <Card />
      <NewCard addCard={addCard}/>
      <CardList />
      <NewBoardForm addBoard={addBoard} />
    </div>
  );
}

export default App;
