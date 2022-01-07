import { useState } from "react";
import PropTypes from "prop-types";
import './NewBoardForm.css'

const NewBoardForm = ({ onAddBoard, isFormVisible, onToggleVisibility }) => {
  // setting state  for NewBoardForm details, board info is the variable being created and
  // setBoardInfo is the function to change it
  const [boardInfo, setBoardInfo] = useState({
    title: "",
    ownersName: "",
  });

  // this is updating state within NewBoardForm instead of in app
  // form is a special case element and its state lives inside it's own component, while most
  // elements state lives in app
  const updateInput = (event) => {
    const name = event.target.name;
    setBoardInfo({
      ...boardInfo,
      [name]: event.target.value,
    });
  };

  const submitRequest = (event) => {
    event.preventDefault();
    onAddBoard(boardInfo);
    setBoardInfo({
      title: "",
      ownersName: "",
    });
  };

  return (
    <div>
      {isFormVisible && (
        <form className="form-container" onSubmit={submitRequest}>
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
            {/* "submit" is a specific type of input, which creates a button "Add New Board",
      when clicked, will call onSubmit(another form keyword) */}
          </label>
          <input className="submit-btn" type="submit" value="Add New Board" />
        </form>
      )}
      <button onClick={onToggleVisibility}>
        {isFormVisible ? "Hide New Board Form" : "Show New Board Form"}
      </button>
    </div>
  );
};

NewBoardForm.propTypes = {
  onAddBoard: PropTypes.func.isRequired,
  isFormVisible: PropTypes.bool.isRequired,
  onToggleVisibility: PropTypes.func.isRequired,
};

export default NewBoardForm;
