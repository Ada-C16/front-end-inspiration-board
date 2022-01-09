import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
//form has the following inputs
//title
//owner

//form has the following buttons:
//submit button

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

  //event handler for new title input
  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  //event handler for new owner input
  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value,
    });
  };

  //event handler to call supplied addStudentCallback

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addBoardCallback({
      title: formFields.title,
      owner: formFields.owner,
    });

    setFormFields({
      title: "",
      owner: "",
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input name="title" value={formFields.title} onChange={onTitleChange} />
      </div>
      <div>
        <label htmlFor="owner">Owner's Name:</label>
        <input name="owner" value={formFields.owner} onChange={onOwnerChange} />
      </div>
      <input type="submit" value="Add Board" />
    </form>
  );
};

//create form with required input
NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;

//-------------------------------------------
