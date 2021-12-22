import React from "react";
import {useState } from 'react';


const NewBoardForm = (props) => {
    const [formField, setFormField] = useState({})

    const onBoardNameChange = (event) => {
        setFormField({
            ...formField,
            boardName: event.target.value, 
        })

        console.log(formField)
    }

    const onBoardOwnerChange = (event) => {
        setFormField({
            ...formField,
            boardOwner: event.target.value, 
        })
        //console.log(formField)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addNewBoardCallback({
            
        })
    }

    return(
        <section className='new-board-form-block grid-block'>
            <h1>New Board Form</h1>
            This is the New Board Form. New Boardz R us!
            <form>
                <div>
                    <label>New Board Name:</label>
                    <input type="text" value={formField.boardName} onChange={onBoardNameChange}></input>
                </div>
                <div>
                    <label>New Board Owner:</label>
                    <input type="text" value={formField.boardOwner} onChange={onBoardOwnerChange}></input>
                </div>
            </form>
        </section>
    )
}

export default NewBoardForm;