import "./App.css";
import NewBoard from "./components/NewBoard";
import BoardsList from "./components/BoardsList";
import CardsContainer from "./components/CardsContainer";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({
    id: null,
    owner_name: "",
    title: "",
  });
  const [boardFormVisible, setBoardFormVisible] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        console.log(response);
        setBoardsData(response.data);
      })
      .catch((error) => {
        console.log(error);
        // Improve error handling
      });
  }, []);

  const createNewBoard = (newBoard) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
      .then((response) => {
        console.log("Response:", response.data);
        const boards = [...boardsData];
        boards.push(response.data);
        setBoardsData(boards);
      })
      .catch((error) => {
        console.log("Error:", error);
        // Improve error handling
      });
  };

  const changeBoardFormVisibility = () => {
    setBoardFormVisible(!boardFormVisible);
  };

  const updateCurrentBoard = (board) => {
    setCurrentBoard(board);
    console.log(currentBoard);
  };

  return (
    <div>
      <header className="header-container">
        <h1 className="header-style">Reactionary</h1>
      </header>

      <div className="container">
        <section className="new-board-container">
          <button
            className="btn btn-primary"
            onClick={changeBoardFormVisibility}
          >
            Create New Board {boardFormVisible ? "\u25B2" : "\u25BC"}
          </button>
          {boardFormVisible ? (
            <NewBoard createNewBoard={createNewBoard} />
          ) : null}
        </section>
        <section className="boards-list-container">
          <BoardsList
            boardsData={boardsData}
            currentBoard={currentBoard}
            updateCurrentBoard={updateCurrentBoard}
          />
        </section>
        <section className="cards-container">
          {currentBoard.id ? (
            <CardsContainer currentBoard={currentBoard} />
          ) : null}
        </section>
      </div>
    </div>
  );
}

export default App;
