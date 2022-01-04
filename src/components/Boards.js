import React from "react";
// import Board from './Board'
import { useState } from 'react';
import axios from 'axios';
import Board from './Board'
import "./Boards.css"


const Boards = (props) => {
  // removed this loop and created a single map loop method to iteriate over boardsData to create a board item, prop.title, prop.owner, and key
  // 1.defined prop titles variable on the Boards Component
    // const titles = props.boardsData.map((board) => {

    //   return (board.title)
    // })

  //2. defined board and use the map method to loop through each title and owner 
    const boards = props.boardsData.map((board, key) => {
      return <Board key = {key} title = {board.title} owner = {board.owner}/> 
  })


  //3. this secion displays the list of titles 
  console.log(boards, "boardtitles")
  return (
    
    <div className = "timeline">

        <h4 className = 'boardsHeader'>Boards</h4>
        <ol>{boards}</ol> 
        

        
    </div>
    

  );
  


};

export default Boards;
