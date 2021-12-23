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
    // This piece of state represents the currently selected board -vange
    const [currentBoard, setCurrentBoard] = useState({
      title: '',
      owner:''
    })

    // This function should update the currentBoard state. It is invoked when a use clicks on a board. It should be passed as a prop to Boardz.js, then down to Board.js
    const updateCurrentBoard = () => {
      //use setCurrentBoard here!
      console.log('the board has been updated')
    }

  return (
    <section>
      <header>
      </header>
      <div className='grid-layout-container'>
        <section className='site-title-block grid-block'>
          <p className='site-title'>InspoBoard</p>
        </section>
        <Boardz updateCurrentBoardCallback={updateCurrentBoard}/>
        <NewCardForm />
        <NewBoardForm addNewBoardCallback={addNewBoard} />
        <CardDisplay />
      </div>
    </section>
  );
}

export default App;
