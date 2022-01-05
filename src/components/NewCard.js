import React from "react";
import { useState } from "react";
import "./NewCard.css";

const NewCard = () => {
  const emptyForm = {
    message: "",
  };

  const [formFields, setFormFields] = useState(emptyForm);

  const addMessage = (e) => {
    setFormFields({
      message: e.target.value,
    });
    document.getElementById("cardPreview").textContent = e.target.value;
  };
  const messageSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
    setFormFields(emptyForm);
  };

  return (
    <form onSubmit={messageSubmit}>
      <div>
        <div>Make a New Card!</div>
        <div>
          <label>Message:</label>
          <input
            type="text"
            name="message"
            onChange={addMessage}
            value={formFields.message}
          ></input>
        </div>
        <span>Preview</span>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default NewCard;
