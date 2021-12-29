import SubmitQueryButton from "./SubmitQueryButton";
import "./CreateANewBoard.css";
import React from "react";
import { useState } from "react";

// this is a CollapsibleForm component
// this component needs to manage if the form
// is collapsed or expanded
// need isCollapsed, either true or false
// need a way to update isCollapsed

const CreateANewBoard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value,
    });
  };

  return (
    <form action="" method="get" className="new-board-form">
      <h4>Temporary Header: Create A New Board</h4>
      <div className="board-title">
        <label htmlFor="title">Title </label>
        <input
          type="text"
          id="title"
          title="Title"
          value={formFields.title}
          onChange={onTitleChange}
          required
        ></input>
      </div>
      <div className="board-owner">
        <label htmlFor="owner">Owner </label>
        <input
          type="text"
          id="owner"
          title="Owner"
          value={formFields.owner}
          onChange={onOwnerChange}
          required
        ></input>
      </div>
      <p>Preview: - </p>
      <SubmitQueryButton />
      <button className="hide-new-board-button" type="button">
        Hide New Board Form
      </button>
    </form>
  );
};

export default CreateANewBoard;
