import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import BoardSelector from "./components/BoardSelector";
import CurrentBoard from "./components/CurrentBoard";
import CardList from "./components/CardList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // useState creating a variable (boards) and function (setBoards)to be used
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getBoards();
    getCards();
  }, []);

  const getBoards = () => {
    axios
      // this URL was given by Ada in readme, /boards endpoint is specific to which backend enpoint we want to access
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      // result is the object/promise that will come from the backend and that object in this case is
      // a list of Board objects
      .then((result) => {
        console.log(result);
        // setBoards is reassigning the state of boards to whatever came through with the axios/ promise/data
        setBoards(result.data);
      });
  };
  const getCards = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/cards`)
      .then((result) => {
        console.log(result);
        setCards(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const cards = [
  //   { id: 1, message: "Hello Ayaka Faith", likes: 0, boardId: 1 },
  //   { id: 2, message: "Hello Andrea", likes: 0, boardId: 1 },
  // ];

  // New Board
  const handleAddBoard = (boardInfo) => {
    console.log(boardInfo.title);
    console.log(boardInfo.ownersName);
    // eventually this function will need to send a POST request through axios to the backend to
    // actually create a new board

    // add newBoard to db
  };

  // New Card
  const handleAddCard = (message) => {
    console.log(message);

    // add newCard to db
  };
  // here selectedCard is just a placeholder
  const increaseLikes = (selectedCard) => {
    console.log(selectedCard);
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        {/* NewBoardForm is used and addBoard function is passed as prop named onAddBoard */}
        <NewBoardForm onAddBoard={handleAddBoard} />
        <NewCardForm onAddCard={handleAddCard} />
        <BoardSelector boards={boards}></BoardSelector>
        {/* <CurrentBoard board={boards[0]}></CurrentBoard> */}
        <CardList cards={cards} onIncreaseLikes={increaseLikes} />
      </main>
    </div>
  );
}

export default App;
