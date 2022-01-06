import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

const BoardForm = (props) => {

    const [formFields, setFormFields] = useState({title:'',owner:''})
    
    const onFormSubmit = (event) =>{
        event.preventDefault();
        console.log(`This is the info ${formFields.owner}`)
        props.onClickAddBoard(formFields)
        }
    
    const onTitleChange = (event) => {
        setFormFields({...formFields,
        title: event.target.value})
    }

    const onOwnerChange = (event) => {
        setFormFields({...formFields,
        owner: event.target.value})
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <p>Title:</p>
                <label htmlFor="title"></label>
                <input name="title" value={formFields.title} onChange={onTitleChange}/>
                
                <p>Owner's Name:</p>
                <label htmlFor="owner"></label>
                <input name="owner" value={formFields.owner} onChange={onOwnerChange}/>
                
                <p>Preview: {formFields.title} - {formFields.owner}</p>
                
                <input type='submit' value='Create Board'></input>
            </div>
        </form>
    )
}

BoardForm.propTypes = {
    onClickAddBoard:PropTypes.func.isRequired,
}

export default BoardForm;