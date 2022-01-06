import PropTypes from "prop-types";
import React from "react";
import "./Board.css";

const Board = ({ boardData, selectBoard, boardCallBack }) => {
  const handleChange = (board_id) => {
    for (let board of boardData) {
      if (board.board_id === board_id) {
        let newState = board;
        boardCallBack(newState);
      }
    }
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

  return (
    <div className="board">
      <div>
        <h2>Choose your board: </h2>
        <ol>{boardOptions}</ol>
      </div>
      <div>
        <h2>Selected Board</h2>
        {selectBoard && (
          <p>
            <span className="board-owner">{selectBoard.owner}:</span>
            <span className="board-title">{selectBoard.title}</span>
          </p>
        )}
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
  selectBoard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    board_id: PropTypes.number.isRequired,
  }),
  boardCallBack: PropTypes.func.isRequired,
};

export default Board;
