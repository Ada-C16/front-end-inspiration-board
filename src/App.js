import "./App.css";
import Board from "./components/Board.js";
import Card from "./components/Card.js";
import NewCard from "./components/NewCard.js";
import NewBoardForm from "./components/NewBoardForm.js";
import CardList from "./components/CardList.js";
import axios from "axios";

function App() {
  const URL = "https://inspiration-board-backend.herokuapp.com";

  const addBoard = (board) => {
    console.log(board);

    axios
      .post(URL + "/boards", board)
      .then(
        (response) => console.log(response.data)
        // getTasks()
      )
      .catch((error) => console.log(error.response.data));
  };

  return (
    <div className="App">
      <Board />
      <Card />
      <NewCard />
      <CardList />
      <NewBoardForm addBoard={addBoard}/>
    </div>
  );
}

export default App;
