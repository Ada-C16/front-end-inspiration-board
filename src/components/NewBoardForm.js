import { useState } from "react";
import PropTypes from "prop-types";

// function addBoard passed from app.js
const NewBoardForm = ({ onAddBoard }) => {
  const [boardInfo, setBoardInfo] = useState({
    title: "",
    ownersName: "",
  });

  const updateInput = (event) => {
    const name = event.target.name;
    setBoardInfo({
      ...boardInfo,
      [name]: event.target.value,
    });
  };

  const submitRequest = (event) => {
    event.preventDefault();
    // calling addBoard function defined in app.js
    onAddBoard(boardInfo);
  };

  return (
    <form onSubmit={submitRequest}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={boardInfo.title}
          onChange={updateInput}
        />
      </label>
      <label>
        Owner's Name:
        <input
          type="text"
          name="ownersName"
          value={boardInfo.ownersName}
          onChange={updateInput}
        />
        <input type="submit" value="Add New Board" />
      </label>
    </form>
  );
};

NewBoardForm.propTypes = {
  onAddBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;
