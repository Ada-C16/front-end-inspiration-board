import "./BoardList.css";
import Board from "./Board";
import { useState } from "react";

const BoardList = (props) => {
  console.log(props);

  const [selectedBoard, setSelectedBoard] = useState([1]);

  const selectBoard = (board) => {
    setSelectedBoard(board);
  };

  const individualBoardComponents = props.boards.map((board) => {
    return (
      <li key={board.id}>
        <Board board={board} OnSelectBoard={selectBoard} />
      </li>
    );
  });

  return (
    <>
      <div className="boardlist">
        <h2>Pick a Board from this List:</h2>
        <ol>{individualBoardComponents}</ol>
      </div>

      <div className="selectedboard">
        <h2>The Board You Selected:</h2>
        <h3>{selectedBoard.title}</h3>
      </div>
    </>
  );
};

export default BoardList;
