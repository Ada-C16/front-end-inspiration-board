import React from "react";
import {useState } from 'react';


const NewCardForm = (props) => {
    //create formField

    const [cardFormField, setCardFormField] = useState({
        cardMessage: ""
    })

    const onCardMessageChange = (event) => {
        setCardFormField({
            ...cardFormField,
            cardMessage: event.target.value
        })
    }

    const onCardFormSubmit = (event) => {
        event.preventDefault();

        //need to pass in this function as a prop
        props.addNewCardCallback({
            message: cardFormField.message
        })
    }

    return(
        <section className='new-card-form-block grid-block'>
            <h1> New Card Form</h1>
            This is the New Card Form.

            <form onSubmit={onCardFormSubmit}>
                <div>
                    <label>New Card Message:</label>
                    <input type="text" value={cardFormField.message} onChange={onCardMessageChange}></input>
                </div>
                <input type="submit" value="Submit"></input>
            </form>

        </section>
    )
}

export default NewCardForm;