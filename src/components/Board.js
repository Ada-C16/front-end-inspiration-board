import PropTypes from "prop-types";
import React from "react";
import "./Board.css";

const Board = ({ boardData, selectBoard, boardCallBack }) => {
  const boardOptions = boardData.map((board) => {
    return (
      <option key={board.board_id} value={board.title}>
        {board.title}
      </option>
    );
  });

  const handleChange = (event) => {
    let newState = event.target.value;
    boardCallBack(newState);
  };

  console.log(selectBoard);

  return (
    <div className="board">
      <div>
        <label>Choose your board: </label>
        <select value={selectBoard} onChange={handleChange}>
          {boardOptions}
        </select>
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
