import PropTypes from "prop-types";
import React from "react";
import "./Board.css";

const Board = ({ boardData, selectState, boardCallBack }) => {
  const boardOptions = boardData.map((board) => {
    return (
      <option key={board.board_id} value={board.title}>
        {board.title}
      </option>
    );
  });

  return (
    <div className="board">
      <div>
        <label>Choose your board: </label>
        {/* <select value={selectState} onChange={boardCallBack}>
          {boardOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select> */}
        <select value={selectState} onChange={boardCallBack}>
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
  selectState: PropTypes.string.isRequired,
  boardCallBack: PropTypes.func.isRequired,
};

export default Board;
