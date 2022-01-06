import PropTypes from "prop-types";
import React, { useState } from "react";
import "./NewBoard.css";

const NewBoard = ({ onSubmitCallBack }) => {
  const [newBoard, setNewBoard] = useState({
    title: "",
    owner: "",
  });

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
      <h2>Make a New Board</h2>
      <form>
        <div>
          Title:
          <input
            type="text"
            name="title"
            value={newBoard.title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          Owner:
          <input
            type="text"
            name="owner"
            value={newBoard.owner}
            onChange={handleOwnerChange}
          />
        </div>
        <button onClick={onSubmit}>Submit</button>
        <button>Show New Board Form/Hide New Board Form</button>
      </form>
    </div>
  );
};

NewBoard.propTypes = {
  onSubmitCallBack: PropTypes.func.isRequired,
};

export default NewBoard;
