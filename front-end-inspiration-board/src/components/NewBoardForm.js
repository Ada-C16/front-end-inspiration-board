import React from "react";
import {useState } from 'react';
import './NewBoardForm.css';


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
                <h1>New Boardz R Us!</h1>
                <button className="hide-button" onClick={handleHideToggle}>{hideToggle} Form</button>
                <section className="can-be-hidden">
                    <form className="new-board-form" onSubmit={onFormSubmit}>
                        {/* <div> */}
                        <label className="new-board-label nb-form-child">New Board Name:</label>
                        <input className="new-board-input"
                            type="text"
                            required
                            value={formField.boardName} 
                            onChange={onBoardNameChange}
                            maxLength={40}>   
                        </input>
                        {/* </div> */}
                        {/* <div> */}
                        <label className="new-board-label nb-form-child">New Board Owner:</label>
                        <input className="new-board-input nb-form-child"
                            type="text"
                            required
                            value={formField.boardOwner} 
                            onChange={onBoardOwnerChange}
                            maxLength={30}>
                        </input>
                        {/* </div> */}
                        <input className="new-board-submit-button nb-form-child"
                            type="submit"
                            value="Submit">
                        </input>
                    </form>
                </section>
            </section>
        )
    } else if (hideToggle === "Show") {
        return(
            <section className='new-board-form-block grid-block'>
                <h1>New Boardz R Us!</h1>
                <button className="hide-button" onClick={handleHideToggle}>{hideToggle} Form</button>
            </section>
        )
    }
}

export default NewBoardForm;