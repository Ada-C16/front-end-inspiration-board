import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ id, owner, title, onClickBoard }) => {
  return (
    <li
      className="board-name"
      onClick={() => {
        onClickBoard(id);
      }}
    >
      {title}, created by {owner}
    </li>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Board;
