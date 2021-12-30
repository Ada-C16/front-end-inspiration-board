import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import BoardSelector from "./components/BoardSelector";
import CardList from "./components/CardList";
import CurrentBoard from "./components/CurrentBoard";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";

function App() {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  useEffect(() => {
    getBoards();
  }, []);

  const getBoards = () => {
    axios
      // this URL was given by Ada in readme, /boards endpoint is specific to which backend enpoint we want to access
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      // result is the object/promise that will come from the backend and that object in this case is
      // a list of Board objects
      .then((result) => {
        // setBoards is reassigning the state of boards to whatever came through with the axios/ promise/data
        setBoards(result.data);
      });
  };
  const getCards = (boardId) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}/cards`)
      .then((result) => {
        setCards(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // New Board
  const handleAddBoard = (boardInfo) => {
    // add newBoard to db and display updated board selections
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
        title: boardInfo.title,
        author: boardInfo.ownersName,
      })
      .then((result) => getBoards())
      .catch((error) => console.log(error));
  };

  // New Card
  const handleAddCard = (message) => {
    // add newCard to db
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/cards`, {
        message,
        board_id: selectedBoard.id,
      })
      .then((result) => getCards())
      .catch((error) => console.log(error));
  };

  const updateCurrentBoard = (boardId) => {
    const board = boards.filter((board) => board.id === parseInt(boardId))[0];
    setSelectedBoard(board);
    getCards(board.id);
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
        <BoardSelector boards={boards} onSelectBoard={updateCurrentBoard} />
        {selectedBoard && <NewCardForm onAddCard={handleAddCard} />}
        {selectedBoard && <CurrentBoard board={selectedBoard} />}
        {selectedBoard && (
          <CardList cards={cards} onIncreaseLikes={increaseLikes} />
        )}
      </main>
    </div>
  );
}

export default App;
