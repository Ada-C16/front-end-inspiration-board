import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";

const URL = "https://inspir8tion-board.herokuapp.com/";

const App = () => {
  const [boards, setBoards] = useState([]);
  const [status, setStatus] = useState("Loading...");
  const [isBoardFormVisible, setBoardForm] = useState(true);
  const [selectedBoard, setSelectedBoard] = useState({
    id: null,
    owner: "",
    title: "",
  });

  // Change title
  useEffect(() => {
    document.title = 'Inspir8tion'
  }, []);

  // Make BoardForm (dis)appear
  const updateBoardFormVisibility = () => {
    if (isBoardFormVisible === true) setBoardForm(false);
    else {
      setBoardForm(true);
    }
  };

  // Select a board
  const onBoardSelect = (board) => {
    setSelectedBoard(board);
  };

  // GET all boards
  useEffect(() => {
    axios
      .get(`${URL}/boards`)
      .then((res) => {
        const newBoards = res.data.map((board) => {
          return {
            id: board.board_id,
            title: board.title,
            owner: board.owner,
          };
        });
        setStatus("Loaded");
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // POST a board
  const addBoardCallback = (board) => {
    const newBoard = board;
    axios
      .post(`${URL}/boards`, newBoard)
      .then((res) => {
        const newBoard = {
          id: res.data.board_id,
          title: res.data.title,
          owner: res.data.owner,
        };
        setBoards([...boards, newBoard]);
      })
      .catch((err) => {
        console.log(err);
        console.log("error response:", err.response);
      });
  };

  // POST a card
  const addCardCallback = (message) => {
    const newCardMessage = message;
    axios
      .post(`${URL}/boards/${selectedBoard.id}/cards`, newCardMessage)
      .catch((err) => console.log(err));
  };

  return (
    <html className="container">
        <main className="App">
          <header className="App-header">Inspir8tion</header>
          <div className="board-list">
            {selectedBoard.id === null ? (
              <p className="select-board">View an Inspir8tion Board!</p>
            ) : (
              <div className="selected-board">
                <p>Selected board: <span>{selectedBoard.title}</span></p>
                <p>Owner: <span>{selectedBoard.owner}</span></p>
              </div>
            )}
            {status === "Loading..." ? (
              `${status}`
            ) : (
              <BoardList boards={boards} onBoardSelect={onBoardSelect} />
            )}
          </div>
          
          <div className="new-board-form">
            <NewBoardForm
              isBoardFormVisible={isBoardFormVisible}
              updateBoardFormVisibility={updateBoardFormVisibility}
              addBoardCallback={addBoardCallback}
            />
          </div>
          <div className="card-list">
            {selectedBoard.id === null ? null : (
              <CardList selectedBoard={selectedBoard} />
            )}
          </div>
        </main>
    </html>
  );
};

export default App;
