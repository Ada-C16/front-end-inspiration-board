import { useState } from "react";
import PropTypes from "prop-types";

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
    onAddBoard(boardInfo);
    setBoardInfo({
      title: "",
      ownersName: "",
    });
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
      </label>
      <input type="submit" value="Add New Board" />
    </form>
  );
};

NewBoardForm.propTypes = {
  onAddBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;
