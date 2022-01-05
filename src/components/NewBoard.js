import PropTypes from "prop-types";
import React, { useState } from "react";
import "./NewBoard.css";

const NewBoard = () => {
  // const [newBoard, setNewBoard] = useState({
  //   text: "",
  //   done: false,
  // });

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
      <p>Preview: </p>

      <button>Show New Board Form/Hide New Board Form</button>
    </div>
  );
};

// NewBoard.propTypes = {
//   boardData: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       owner: PropTypes.string.isRequired,
//       board_id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

export default NewBoard;
