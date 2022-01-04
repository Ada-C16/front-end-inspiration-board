import "./App.css";
import axios from "axios";
import Board from "./components/Board";
import Boards from "./components/Boards";
import Card from "./components/Card";
import CreateANewBoard from "./components/CreateANewBoard";
import CreateANewCard from "./components/CreateANewCard";
import Logo from "./components/Logo";
import SelectedBoard from "./components/SelectedBoard";
import { useState, useEffect } from "react";

function App() {
  const [boardsData, setBoards] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getBoards = () => {
    axios
      .get("https://trm2-inspiration-board.herokuapp.com/boards")
      .then((response) => {
        setBoards(response.data);
        // setErrorMessage('');
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(<section>{error.message}</section>);
      });
  };

  // useEffect(() => {
  //   console.log("changes were made");
  // }, [boards]);

  useEffect(() => {
    getBoards();
    console.log("changes were made");
  }, []);
  const postANewCardForm = (cardsData) => {
    console.log(cardsData);
    const cards = { message: cardsData };
    axios
      .post(
        "https://trm2-inspiration-board.herokuapp.com/boards/3/cards",
        cards
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        // setErrorMessage
      });
  };

  // add new board to the board data
  const addBoardData = (newBoard) => {
    // Duplicate the board list
    const newBoardList = [...boardsData];

    // logic to generate the nest valid board ID
    const nextID = Math.max(...(newBoardList.map((board) => board.id) + 1));

    newBoardList.push({
      id: nextID,
      owner: newBoard.owner,
      title: newBoard.title,
    });

    setBoards(newBoardList);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Logo />
        </div>
        <div className="col">
          <Boards boardsData={boardsData} />
        </div>
        <div className="col">
          <SelectedBoard />
        </div>
        <div className="col">
          <CreateANewBoard
            boards={boardsData}
            addBoardCallback={addBoardData}
          />
        </div>
        <div className="col">
          <Board />
          {errorMessage}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <CreateANewCard postANewCard={postANewCardForm} />{" "}
        </div>
      </div>
      <div className="footer">
        <p></p>
        <footer className="container text-center">©TRM2 2022</footer>
        <p></p>
      </div>
    </div>
  );
}

export default App;
