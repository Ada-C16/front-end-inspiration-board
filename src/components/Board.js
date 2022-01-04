import PropTypes from "prop-types";
import React from "react";
import "./Board.css";

const Board = ({ boards }) => {
  const boardDisplay = boards.map((board) => {
    return (
      <div className="Board">
        <div>The title is: {board.title}</div>
        <div>Select New Board</div>
      </div>
    );
  });
};

Board.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Board;
