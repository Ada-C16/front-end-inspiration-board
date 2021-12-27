import "./App.css";
import Board from "./components/Board";
import Card from "./components/Card";
import NewBoardForm from "./components/NewBoardForm";
import React, { useState } from "react";
import axios from "axios";
import NewCardForm from "./components/NewCardForm";

function App() {
  const [boardsData, setBoardsData] = useState([
    { board_id: 1, owner: "Owner A Test", title: "Board 1 Test" },
    { board_id: 2, owner: "Owner B Test", title: "Board 2 Test" },
    { board_id: 3, owner: "Owner C Test", title: "Board 3 Test" },
    { board_id: 4, owner: "Owner D Test", title: "Board 4 Test" },
    { board_id: 5, owner: "Owner E Test", title: "Board 5 Test" },
  ]);

  // const [isBoardFormVisible, setBoardFormVisible] = useState(true)

  // const toggleNewBoardForm = (!isBoardFormVisible) =>{ 
  //   if (isBoardFormVisible === true){
  //     setBoardFormVisible(false); 
  //   }else if (isBoardFormVisible === false){
  //     setBoardFormVisible(true);
  //   }
  // }

  const [visible, setVisible] = React.useState(false);

  const addNewBoard = (newBoard) => {
    const newBoardList = [...boardsData];

    const nextBoardId =
      Math.max(...newBoardList.map((board) => board.board_id)) + 1;

    newBoardList.push({
      board_id: nextBoardId,
      title: newBoard.titleData,
      owner: newBoard.ownerData,
    });

    setBoardsData(newBoardList);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Lovelace's Inspiration Boards</h1>
      </header>
      <main>
        <div>
      <button onClick={() => setVisible(true)}>Show</button>
      <button onClick={() => setVisible(false)}>Hide</button>
      {visible && <div> <h2>Creating a new board</h2>
        <NewBoardForm addBoardCallback={addNewBoard} />
        <input type="submit" value="submit" /></div>}
    </div>
      </main>
    </div>
  );
}

export default App;
