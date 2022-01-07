import "./App.css";
// import "./index.css";
import NewCard from "./components/NewCard.js";
import NewBoardForm from "./components/NewBoardForm.js";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList.js";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const URL = "https://inspiration-board-backend.herokuapp.com";

  const [boards, setBoards] = useState([]);

  const [cards, setCards] = useState([]);

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
      .then((response) => {
        console.log(response.data);
        setCards(response.data);
      })
      .catch((error) => console.log(error.response.data));
  };

  const addCard = (card) => {
    console.log(card);

    axios
      .post(URL + "/boards/" + card.board_id + "/cards", card)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response.data));
  };

  const likeCard = (card) => {
    console.log(card);

    axios
      .patch(URL + "/cards/" + card.card_id)
      .then(() => getCards(card.board_id))
      .catch((error) => console.log(error.response.data));
  };

  return (
    <div className="app-container">
      <header>
        <h1>Manifestation Station</h1>
      </header>
      <div className="List">
        <BoardList boards={boards} getCards={getCards} />
      </div>
      <div>
        <CardList cards={cards} likeCard={likeCard} />
      </div>
      <div className="Forms">
        <NewBoardForm addBoard={addBoard} />
        <NewCard addCard={addCard} />
      </div>
    </div>
  );
}

export default App;
