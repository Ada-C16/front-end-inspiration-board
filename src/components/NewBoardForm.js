import React, { useState } from "react";
import './NewBoardForm.css'

const NewBoardForm = (props) => {
  const emptyForm = {
    title:"",
    owner: "",
  }

  const [formFields, setFormFields] = useState(emptyForm)

  const onTitleChange = (e) => {
    setFormFields({
      ...formFields,
      title: e.target.value})
    document.getElementById("boardPreview").textContent = e.target.value
  }
  const onOwnerChange = (e) => {
    setFormFields({
      ...formFields,
      owner: e.target.value})
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    props.createNewBoard(formFields);

    setFormFields(emptyForm);
  }

  return (
    <section>
    <form onSubmit={onFormSubmit}>
      <h2>Create a New Board</h2>
      <label htmlFor="title">Title</label>
      <input onChange={onTitleChange} value={formFields.title} name="title" type="text"></input>
      <label htmlFor="ownerName">Owner's Name</label>
      <input onChange={onOwnerChange} value={formFields.owner} name="ownerName" type="text"></input>
      <p>Preview: <span id="boardPreview"></span></p>
      <button type="submit">Submit Query</button>
    </form>
  </section>
  )
}

export default NewBoardForm;