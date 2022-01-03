import React, { useState } from "react";
// import axios from "axios";

const BoardForm = () => {
  const [values, setValues] = useState({title:'', owner:''});
  const onChange = (name) => {
    return ({ target: { value } }) => {
      setValues(oldValues => ({ ...oldValues, [name]: value }));
      console.log(values)
    }
  };
  return (
  <div>BoardForm 
    <form>
      <label>Title <input type='text' name='title' value={values.title} onChange={onChange('title')}></input></label>
      <label>Owner's Name <input type='text' name='owner' value={values.owner} onChange={onChange('owner')}></input></label>
      <input type="submit"></input>
    </form>
  </div>)
};

export default BoardForm;

