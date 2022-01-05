import PropTypes from "prop-types";
import React from "react";
import "./Board.css";

const Board = ({ boardData, selectBoard, boardCallBack }) => {
  const handleChange = (board_id) => {
    for (let board of boardData) {
      if (board.board_id === board_id) {
        let newState = board;
        console.log(newState);
        boardCallBack(newState);
      }
    }
    // let newState = event.target.id;
  };

  const boardOptions = boardData.map((board) => {
    return (
      <li key={board.board_id}>
        <button
          id={board.board_id}
          onClick={() => handleChange(board.board_id)}
        >
          {board.title}
        </button>
      </li>
    );
  });

  // console.log(selectBoard);

  return (
    <div className="board">
      <div>
        <label>Choose your board: </label>
        <ol>{boardOptions}</ol>
      </div>
      <div>
        <h2>Selected Board</h2>
        <p>
          {selectBoard.owner}: {selectBoard.title}
        </p>
      </div>
    </div>
  );
};

Board.propTypes = {
  boardData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      board_id: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectBoard: PropTypes.string.isRequired,
  boardCallBack: PropTypes.func.isRequired,
};

export default Board;
