import axios from "axios";
import React, {useEffect, useState} from "react";
import Display from "./components/Display"; 
import Forms from "./components/Forms";

const App = () => {

  const [currentBoard, setCurrentBoard] = useState(1);
  const [display, setDisplay] = useState(<Display title="board" owner = "train-emoji" cards = {[]}/>);

  const onBoardSelect = (id) => {
    setCurrentBoard(id);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard}`)
      .then((response) => {
        setDisplay(<Display  title = {response.data.title} owner = {response.data.owner} cards = {response.data.cards}/>)
        // send cards as prop 
      })
  };

  // if i have posted a card, assign it to the current board specifically.
  // send current board as prop to post so it can use the value in api to assign in post route
  // in App, ,
  // in Forms currentBoard = {props.currentBoard}
  //

  return (
    <div className="App">
      <header>
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <Forms onBoardSelect = {onBoardSelect} currentBoard = {currentBoard}/>
        {display}
      </main>
    </div>
  )
};
export default App; 
