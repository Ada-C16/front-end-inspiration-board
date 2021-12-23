import './App.css';
import Boardz from './components/Boardz';
import CardDisplay from './components/CardDisplay'; 
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';
import {useState } from 'react';
import React, { useEffect } from "react";
import axios from "axios";

function App() {

  const [boardList, setBoardList] = useState([])
  
  const addNewBoard = newBoard => {
    const newBoardList = [...boardList]

    newBoardList.push({
      title: newBoard.boardName,
      owner: newBoard.boardOwner
    })
  
    setBoardList(newBoardList);
    console.log(newBoardList)

  }

  

  ///all of this is an experiment
  // useEffect(() => {
  //   axios
  //     .get(
  //       "http://localhost:5000/board"
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       // setBoardList([...response.data.recipes]);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);


///////////////

  return (
    <section>
      <header>
      </header>
      <div className='grid-layout-container'>
        <section className='site-title-block grid-block'>
          <p className='site-title'>InspoBoard</p>
        </section>
        <Boardz />
        <NewCardForm />
        <NewBoardForm addNewBoardCallback={addNewBoard} />
        <CardDisplay />
      </div>
    </section>
  );
}

export default App;
