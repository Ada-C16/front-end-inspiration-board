import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewCardForm.css";
// import './NewBoardForm.css';

const NewCardForm = ({ addCardCallback }) => {
  const [formFields, setFormFields] = useState({
    message: "",
  });

  const onMessageChange = (event) => {
    setFormFields({
      ...formFields,
      message: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    addCardCallback({
      message: formFields.message,
    });

    setFormFields({
      message: "",
    });
  };

  return (
    <>
      <h2 className="add-card-header">Add New Card</h2>

      <form className="new-card-form" onSubmit={onFormSubmit}>
          <input
            className="card-form-input"
            placeholder="TYPE MESSAGE HERE"
            name="message"
            value={formFields.message}
            onChange={onMessageChange}
          />
        <input className="add-card-button" type="submit" value=" +  add card" />
      </form>
    </>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
