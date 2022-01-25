import React, { useState } from "react";

const NewCardForm = (props) => {
  const emptyForm = {
    message: ""
  }

  const [formFields, setFormFields] = useState(emptyForm)

  const onMessageChange = (e) => {
    setFormFields({
      message: e.target.value})
    document.getElementById("cardPreview").textContent = e.target.value
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    props.createNewCard(formFields);

    console.log(formFields);
    setFormFields(emptyForm);
  }

  return (
      <form onSubmit={onFormSubmit}>
      <h2>Create New Card</h2>
        <label htmlFor="message">Message</label>
        <input type="text" name="message" onChange={onMessageChange} value={formFields.message}></input>
        <p>Preview: <span id="cardPreview"></span></p>
        <button type="submit">Submit message</button>
      </form> 
  )
}

export default NewCardForm;