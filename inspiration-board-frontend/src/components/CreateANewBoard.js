import SubmitQueryButton from "./SubmitQueryButton";
import React from "react";

const CreateANewBoard = () => {
  return (
    <form action="" method="get" className="new-board-form">
      <h4>Temporary Header: Create A New Board</h4>
      <div className="board-title">
        <label for="title">Title </label>
        <input type="text" id="title" required></input>
      </div>
      <div className="board-owner">
        <label for="owner">Owner </label>
        <input type="text" id="owner" required></input>
      </div>
      <p>Preview: - </p>
      <SubmitQueryButton />
      <button type="button">Hide New Board Form</button>
    </form>
  );
};

export default CreateANewBoard;
