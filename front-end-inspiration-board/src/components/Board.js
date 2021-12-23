import React from "react";
import './Board.css';

// This component should inheret the following from App.js as props:
// -an object that contains the board title. 
// -A callback function that will update state in App.js. 

const Board = (props) => {

    // This function is called when a user clicks on the name of a board
    const handleSelectList = (event) => {
        console.log("you clicked on the board you want to display!");
        // invoke callback function from props here.This function should update currentBoard state in App.js. 
        props.selectNewBoard();
    }

    return(
        <section 
            className="boardTab" onClick={handleSelectList}>
                {/* prop.boardName or something similar here. but for now...⬇️*/}
                A board named bitch 🌸
        </section>
    )
}

export default Board;