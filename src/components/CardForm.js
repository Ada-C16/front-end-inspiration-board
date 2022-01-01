import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

const CardForm = (props) => {

    const [formFields, setFormFields] = useState({message:'',likes_count: 0})
    
    const onFormSubmit = (event) =>{
        event.preventDefault();
        props.onClickAddCard(formFields)
        }
    
    const onMessageChange = (event) => {
        setFormFields({...formFields,
        message: event.target.value})
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <p>Title:</p>
                <label htmlFor="title"></label>
                <input name="title" value={formFields.message} onChange={onMessageChange}/>
                
                <p>Preview: {formFields.message}</p>
                
                <input type='submit' value='Create Card'></input>
            </div>
        </form>
    )
}

CardForm.propTypes = {
    onClickAddCard:PropTypes.func.isRequired,
}

export default CardForm;