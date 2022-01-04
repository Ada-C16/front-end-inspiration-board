import React from "react";
const axios = require('axios')

const URL = process.env[]

const NewBoardForm = () => {
  return (
    <section>
    <form>
      <h2>Create a New Board</h2>
      <label>Title</label>
      <input type="text"></input>
      <label>Owner's Name</label>
      <input type="text"></input>
      <p>Preview: -</p>
      <button type="submit">Submit Query</button>
    </form>
    <span>Hide New Board Form</span>
    {/* <span onClick={}>Hide New Board Form</span> */}
  </section>
  )
}

export default NewBoardForm;