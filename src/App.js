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
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((result) => {
        setBoards(result.data);
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
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const updateCurrentBoard = (boardId) => {
    const board = boards.filter((board) => board.id === parseInt(boardId))[0];
    setSelectedBoard(board);
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
        {/* <CurrentBoard board={boards[0]}></CurrentBoard> */}
        {/* <CardList cards={cards} onIncreaseLikes={increaseLikes} /> */}
      </main>
    </div>
  );
}

export default App;
