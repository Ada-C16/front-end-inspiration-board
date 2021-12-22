import React, { useState } from "react"
import axios from "axios"
import { response } from "express";

// board form 
// select 
// make the component that comes from the form

// make a board 
const Board = () => {
    const [formField,setFormField]= useState({title:"", owner:""});
    const onTitleChange = (e) => {
        setFormField({
         ...formField, 
         title: e.target.value
         
        })
    };
    const onOwnerChange = (e) => {
        setFormField({
         ...formField, 
         owner: e.target.value
         
        })
    };
    const onBoardSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`,formField)
        .then((response)=>{setFormField({
            title: "", 
            owner: ""
   
           })})
        .catch((err) => console.log(err)
        )
        
    };




    return (<div>
        <form>
            <div>
                <label htmlFor="title">title</label>
                <input name="title" value={formField.title} onChange={onTitleChange}/> 
            </div>
            <div>
                <label htmlFor="owner">owner</label>
                <input name="owner" value={formField.owner} onChange={onOwnerChange}/> 
            </div>
                <input type="submit" value="Make Board" onClick={onBoardSubmit}/>

        </form>
    </div>)
};

export default Board;