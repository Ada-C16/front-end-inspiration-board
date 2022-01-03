import React from "react";
import {useState } from 'react';


const NewBoardForm = (props) => {
    const [hideToggle, setHideToggle] = useState("Hide");

    const handleHideToggle = () => {
        if (hideToggle === "Show") {
            setHideToggle("Hide");
        } else if (hideToggle === "Hide") {
            setHideToggle("Show");
        }
    }

    const [formField, setFormField] = useState({
        boardName: "",
        boardOwner: ""
    })

    const onBoardNameChange = (event) => {
        setFormField({
            ...formField,
            boardName: event.target.value, 
        })

        // console.log(formField)
    }

    const onBoardOwnerChange = (event) => {
        setFormField({
            ...formField,
            boardOwner: event.target.value, 
        })
        // console.log(formField)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addNewBoardCallback({
            title: formField.boardName,
            owner: formField.boardOwner
        })

        //cabebe 12.28.21
        //resets formfield state on Form Submit button click
        setFormField({
            boardName: '',
            boardOwner: '',
        });
    }

    if (hideToggle === "Hide") {
        return(
            <section className='new-board-form-block grid-block'>
                <h1>New Board Form</h1>
                <section className="can-be-hidden">
                    This is the New Board Form. New Boardz R us!
                    <form onSubmit={onFormSubmit}>
                        <div>
                            <label>New Board Name:</label>
                            <input type="text"
                            required
                            value={formField.boardName} 
                            onChange={onBoardNameChange}></input>
                        </div>
                        <div>
                            <label>New Board Owner:</label>
                            <input type="text"
                                    required
                                    value={formField.boardOwner} 
                                    onChange={onBoardOwnerChange}></input>
                        </div>
                        <input type="submit" value="Submit"></input>
                    </form>
                </section>
                <button onClick={handleHideToggle}>{hideToggle} Form</button>
            </section>
        )
    } else if (hideToggle === "Show") {
        return(
            <section className='new-board-form-block grid-block'>
                <h1>New Board Form</h1>
                <button onClick={handleHideToggle}>{hideToggle} Form</button>
            </section>
        )
    }
}

export default NewBoardForm;