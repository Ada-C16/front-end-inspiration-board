import React from "react";
import Board from './Board'
import { useState } from 'react';
import axios from 'axios';

const Boards = (props) => {
  // 1.defined prop titles variable on the Boards Component
    const titles = props.boardsData.map((board) => {

      return (board.title)
    })

  //2. defined titlelist and use the map method to loop through each title
    const titlelist = titles.map((title, key) => {
      return <Board key = {key} title = {title}/>
  })



  //3. this secion displays the list of titles 
  return (
    <div className = "timeline">

        <ol>{titlelist}</ol>

    </div>

  );

 // return <h1>I am Boards.</h1>;
};

export default Boards;
