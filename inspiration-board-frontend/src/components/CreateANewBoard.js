import SubmitButton from "./SubmitButton";
import "./CreateANewBoard.css";
import React from "react";
import { useState } from "react";

// this is a CollapsibleForm component
// this component needs to manage if the form
// is collapsed or expanded
// need isCollapsed, either true or false
// need a way to update isCollapsed

const CreateANewBoard = () => {
  // const [isCollapsed, setIsCollapsed] = useState(false);

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

  const showPreview = (event) => {
    console.log(
      "Details about the element that fired the event:",
      event.target
    );
    console.log("The value of that element:", event.target.value);
    setFormFields(event.target.value);
  };

  return (
    <form action="" method="get" className="new-board-form">
      <h4 className="create-new-board-header">Create A New Board</h4>
      <div className="board-title">
        <label htmlFor="title">Title </label>
        <input
          type="text"
          id="title"
          title="Title"
          placeholder="give me a title!"
          maxLength="40"
          value={formFields.title}
          onChange={(onTitleChange, showPreview)}
          required
        ></input>
      </div>
      <div className="board-owner">
        <label htmlFor="owner">Owner </label>
        <input
          type="text"
          id="owner"
          title="Owner"
          placeholder="who are you?"
          maxLength="40"
          value={formFields.owner}
          onChange={(onOwnerChange, showPreview)}
          required
        ></input>
      </div>
      <p>Preview: - </p>
      <SubmitButton />
      <button className="hide-new-board-button" type="button">
        Hide New Board Form
      </button>
    </form>
  );
};

export default CreateANewBoard;
