import PropTypes from "prop-types";
import React, { useState } from "react";
import "./NewBoard.css";

const NewBoard = ({ onSubmitCallBack }) => {
  const [newBoard, setNewBoard] = useState({
    text: "",
    done: false,
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    // setNewBoard(newBoard);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onSubmitCallBack(newBoard);
    setNewBoard({
      text: "",
      done: false,
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
            value={newBoard.text}
            onChange={handleChange}
          />
        </div>
        <div>
          Owner:
          <input type="text" />
        </div>

        <button>Submit</button>
        <p>Preview: </p>

        <button>Show New Board Form/Hide New Board Form</button>
      </form>
    </div>
  );
};

NewBoard.propTypes = {
  onSubmitCallBack: PropTypes.func.isRequired,
};

export default NewBoard;
