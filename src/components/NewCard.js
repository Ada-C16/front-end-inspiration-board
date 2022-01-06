import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./NewCard.css";

const NewCard = ({ onSubmitCallBack }) => {
  const emptyForm = {
    message: "",
  };

  const [formFields, setFormFields] = useState(emptyForm);

  const addMessage = (e) => {
    setFormFields({
      message: e.target.value,
    });
  };
  const messageSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
    onSubmitCallBack(formFields);
    setFormFields(emptyForm);
  };

  return (
    <form onSubmit={messageSubmit}>
      <div>
        <h2>Make a New Card!</h2>
        <div>
          <label>Message:</label>
          <input
            type="text"
            name="message"
            onChange={addMessage}
            value={formFields.message}
          ></input>
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
};

NewCard.propTypes = {
  onSubmitCallBack: PropTypes.func.isRequired,
};

export default NewCard;
