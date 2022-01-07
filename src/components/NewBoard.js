import PropTypes from "prop-types";
import React, { useState } from "react";
import "./NewBoard.css";

const NewBoard = ({ onSubmitCallBack }) => {
  const [newBoard, setNewBoard] = useState({
    title: "",
    owner: "",
  });

  const [hideBoard, setHideBoard] = useState(true);

  const toggleHideBoard = () => {
    setHideBoard(!hideBoard);
  };

  const handleTitleChange = (event) => {
    setNewBoard({ ...newBoard, title: event.target.value });
  };

  const handleOwnerChange = (event) => {
    setNewBoard({ ...newBoard, owner: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onSubmitCallBack(newBoard);
    setNewBoard({
      title: "",
      owner: "",
    });
  };

  return (
    <div>
      <h2>Make a New Board!</h2>
      {hideBoard && (
        <form>
          <div>
            <label for="title">Title:</label>
            <input
              type="text"
              name="title"
              value={newBoard.title}
              onChange={handleTitleChange}
            />
          </div>
          <div>
            <label for="owner">Owner:</label>
            <input
              type="text"
              name="owner"
              value={newBoard.owner}
              onChange={handleOwnerChange}
            />
          </div>
          <button onClick={onSubmit}>Submit</button>
        </form>
      )}
      <button onClick={toggleHideBoard}>
        {hideBoard ? "Hide New Board Form" : "Show New Board Form"}
      </button>
    </div>
  );
};

NewBoard.propTypes = {
  onSubmitCallBack: PropTypes.func.isRequired,
};

export default NewBoard;
