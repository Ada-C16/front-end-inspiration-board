import SubmitButton from "./SubmitButton";
import "./CreateANewBoard.css";
import React from "react";
import useCollapse from "react-collapsed";
import { useState } from "react";

const CreateANewBoard = () => {
  const [isExpanded, setExpanded] = useState(true);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

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
      <h4 className="create-new-board-header">Create A New Board</h4>
      <div {...getCollapseProps()}>
        <div className="board-title">
          <label htmlFor="title">Title </label>
          <input
            type="text"
            id="title"
            title="Title"
            placeholder="give me a title!"
            maxLength="40"
            value={formFields.title}
            onChange={onTitleChange}
            required
          ></input>
        </div>
        <p></p>
        <div className="board-owner">
          <label htmlFor="owner">Owner </label>
          <input
            type="text"
            id="owner"
            title="Owner"
            placeholder="who are you?"
            maxLength="40"
            value={formFields.owner}
            onChange={onOwnerChange}
            required
          ></input>
        </div>
        <p></p>
        <p>
          Preview: {formFields.title} - {formFields.owner}
        </p>
        <p></p>
        <SubmitButton />
      </div>
      <button
        className="hide-new-board-button"
        type="button"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? "Hide New Board Form" : "Show New Board Form"}
      </button>
    </form>
  );
};

export default CreateANewBoard;
