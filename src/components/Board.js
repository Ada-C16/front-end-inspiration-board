import PropTypes from "prop-types";
import React from "react";
import "./Board.css";

const Board = ({ boardData }) => {
  const boardsList = boardData.map((board) => {
    return <li key={board.board_id}>Title of Board: {board.title}</li>;
  });

  return (
    <div className="Board">
      <ol>{boardsList}</ol>
      <div>Select New Board</div>
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
};

export default Board;
