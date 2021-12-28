import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import BoardSelector from "./components/BoardSelector";
import CurrentBoard from "./components/CurrentBoard";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  useEffect(() => {
    updateBoards();
  }, []);

  const updateBoards = () => {
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
      .then((response) => updateBoards())
      .catch((error) => console.log(error));
  };

  // New Card
  const handleAddCard = (message) => {
    console.log(message);

    // add newCard to db
  };

  const updateCurrentBoard = (boardId) => {
    const board = boards.filter((board) => board.id === parseInt(boardId))[0];
    setSelectedBoard(board);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <NewBoardForm onAddBoard={handleAddBoard} />
        <NewCardForm onAddCard={handleAddCard} />
        <BoardSelector boards={boards} onSelectBoard={updateCurrentBoard} />
        {selectedBoard && <CurrentBoard board={selectedBoard} />}
      </main>
    </div>
  );
}

export default App;
