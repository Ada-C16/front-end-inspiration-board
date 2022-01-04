import React,{useState} from "react";
const axios = require('axios')

const URL = process.env['SQLALCHEMY_DATABASE_URI']

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState(
    {
      title:"",
      owner: "",
    }
  )
  const onTitleChange = (e) =>{
    setFormFields({
      ...formFields,
      title: e.target.value})
  }
  const onOwnerChange = (e) => {
    setFormFields({
      ...formFields,
      owner: e.target.value})

  }
  return (
    <section>
    <form onSubmit={props.onFormSubmit}>
      <h2>Create a New Board</h2>
      <label htmlFor="title">Title</label>
      <input onChange={onTitleChange} value={formFields.title} name="title" type="text"></input>
      <label htmlFor="ownerName">Owner's Name</label>
      <input onChange={onOwnerChange} value={formFields.owner} name="ownerName" type="text"></input>
      <p>Preview: -</p>
      <button type="submit">Submit Query</button>
    </form>
    <span>Hide New Board Form</span>
    {/* <span onClick={}>Hide New Board Form</span> */}
  </section>
  )
}

export default NewBoardForm;