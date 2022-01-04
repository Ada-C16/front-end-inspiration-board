import React from "react";
import { useState } from 'react';
//form has the following inputs
//title
//owner

//form has the following buttons:
//submit button


const NewBoardForm = (props) =>{
  const [formFields, setFormFields] = useState({
      title: '',
      owner: ''
  });

//event handler for new title input
  const onTitleChange = (event) =>{
    setFormFields({
      ...formFields,
      title: event.target.value
    })
  };

//event handler for new owner input
  const onOwnerChange = (event) =>{
    setFormFields({
      ...formFields,
      owner: event.target.value
    })
  };

  return (
    <form>
      <div>
        <label htmlFor="title">Title:</label>
        <input name="title" value={formFields.title} onChange={onTitleChange}/>
      </div>
      <div>
        <label htmlFor="owner">Owner's Name:</label>
        <input name="owner" value={formFields.owner} onChange={onOwnerChange}/>
      </div>
      <input
      type="submit"
      value="Add Board"/>
    </form>
  );
};


//create form with required input

export default NewBoardForm;


//-------------------------------------------
