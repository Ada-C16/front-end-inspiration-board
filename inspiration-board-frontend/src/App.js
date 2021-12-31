import "./App.css";
import axios from "axios";
import Board from "./components/Board";
import Boards from "./components/Boards";
import Card from "./components/Card";
import CreateANewBoard from "./components/CreateANewBoard";
import CreateANewCard from "./components/CreateANewCard";
import Header from "./components/Header";
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
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
        <div className="col">
          <Boards boardsData={boardsData} />
        </div>
        <div className="col">
          <SelectedBoard />
        </div>
        <div className="col">
          <CreateANewBoard />
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
