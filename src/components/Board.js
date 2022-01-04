import PropTypes from "prop-types";
import React from "react";
import "./Board.css";

const Board = ({ boardData, selectBoard, selectCallBack }) => {
  const boardsOptions = boardData.map((board) => {
    return (
      // <li>
      //   <button key={board.board_id} onClick={selectCallBack}>
      //     {board.title}
      //   </button>
      // </li>
      <option value={board.title}>{board.title}</option>
    );
  });

  return (
    <div className="board">
      <div>
        <label for="board">Choose your board: </label>
        <select name="board" id="board">
          {boardsOptions}
        </select>
      </div>
    </div>
  );
};

Board.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      board_id: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectBoard: PropTypes.string.isRequired,
  selectCallBack: PropTypes.func.isRequired,
};

export default Board;
