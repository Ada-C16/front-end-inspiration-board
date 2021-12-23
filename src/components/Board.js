import React, { useState, useEffect } from "react"
import axios from "axios"


// update boardlist when board is made
// dont allow empty title or owner in submission // duplicates?
// get request onBoardSelect() to display the info

const Board = () => {
    
    const [boards, setBoards] = useState([]);
    const getBoards = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
        .then((response) => {            
            setBoards(response.data)
        })
    };

    useEffect(() => {
        getBoards();
    }, []);

    const renderBoards = () => {
        const options = boards.map((board, i) => {
            return <option value={board} key={i}>{board}</option>
        });
        return options;
    }
    
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
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`,formField)
        .then(()=>{setFormField({
            title: "", 
            owner: ""
           })});
        //.catch((err) => console.log(err))
        // getBoards() IN then to occur following post
    };


    
    const onBoardSelect = () => {
        //getBoards();
    };
    
    
    return (
    <div>
        <select name = "selectBoard" onChange = {onBoardSelect()}>{renderBoards()}</select>
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