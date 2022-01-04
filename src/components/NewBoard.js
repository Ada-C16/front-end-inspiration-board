import PropTypes from "prop-types";
import React from "react";
import "./NewBoard.css";

const NewBoard = () => {
  return (
    <div>
      <div>Make a New Board</div>
      <div>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
      </div>
      <div>
        <label>
          Owner:
          <input type="text" />
        </label>
      </div>
      <button>Submit</button>
      <span>Preview</span>

      <button>Show New Board Form/Hide New Board Form</button>
    </div>
  );
};

// board_id
// title
// owner

export default NewBoard;
