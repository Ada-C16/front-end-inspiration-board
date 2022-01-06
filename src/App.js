import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import { useState, useEffect } from "react";
import axios from "axios";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";

export const URL = "https://inspir8tion-board.herokuapp.com/";

const App = () => {
  const [boards, setBoards] = useState([]);
  const [status, setStatus] = useState("Loading...");
  const [isBoardFormVisible, setBoardForm] = useState(true);
  const [selectedBoard, setSelectedBoard] = useState({
    id: null,
    owner: "",
    title: "",
  });

  const updateBoardFormVisibility = () => {
    if (isBoardFormVisible === true) setBoardForm(false);
    else {
      setBoardForm(true);
    }
  };

  const onBoardSelect = (board) => {
    // setSelectedBoard(`${title} - ${owner}`);
    setSelectedBoard(board);
  };

  // *** CONNECTING TO THE API *** //

  // GET Boards
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

  // POST Boards
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

  // POST Cards
  // const addCardCallback = (board_id, message) => {
  const addCardCallback = (message) => {
    const newCardMessage = message;
    axios
      .post(`${URL}/boards/${selectedBoard.id}/cards`, newCardMessage)
      // .post(`${URL}/1/cards`, newCardMessage)
      // .then(() => setTasks(newTasks))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">Our awesome board... in progress</header>
      <main>
        <div>
          {status === "Loading..." ? (
            `${status}`
          ) : (
            <BoardList boards={boards} onBoardSelect={onBoardSelect} />
          )}
        </div>
        {selectedBoard.id === null ? (
          <p>Select a Board from the Board List!</p>
        ) : (
          `${selectedBoard.title} - ${selectedBoard.owner}`
        )}
        {/* null above should eventually be setSelectedBoard*/}
        {/* <div>
          <Board onBoardSelect={selectedBoard} boards={boards} />
        </div> */}
        <div>
          <NewBoardForm
            isBoardFormVisible={isBoardFormVisible}
            updateBoardFormVisibility={updateBoardFormVisibility}
            addBoardCallback={addBoardCallback}
          />
        </div>
        <div>
        {selectedBoard.id === null ? (null) : 
        (<CardList selectedBoard={selectedBoard} />)}
        </div>
        <div>
        {selectedBoard.id === null ? (null) : 
        (<NewCardForm addCardCallback={addCardCallback}/>)}
        </div>
      </main>
    </div>
  );
};

export default App;
