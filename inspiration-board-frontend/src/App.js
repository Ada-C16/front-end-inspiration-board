import "./App.css";
import Boards from "./components/Boards";
import Card from "./components/Card";
import CreateANewBoard from "./components/CreateANewBoard";
import SelectedBoard from "./components/SelectedBoard";
import Board from "./components/Board";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [boardsData, setBoards] = useState([
    { board_id: 127, owner: "Min.", title: "ATLA Quotes" },
  ]);
  const [errorMessage, setErrorMessage] = useState("");

  const getBoards = () => {
    axios
      .get("https://trm2-inspiration-board.herokuapp.com/boards" )
      .then((response) => {
        setBoards(response.data);
        // setErrorMessage('');
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(<section>{error.response.data.message}</section>);
      });
  };

  // useEffect(() => {
  //   console.log("changes were made");
  // }, [boards]);

  useEffect(() => {
    getBoards();
    console.log("changes were made");
  }, []);
  return (
    <div className="container">
      <div className="row">
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
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
