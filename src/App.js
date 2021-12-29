import axios from "axios";
import React, {useEffect, useState} from "react";
import Display from "./components/Display"; 
import Forms from "./components/Forms";
import "./App.css";


const App = () => {

  const [currentBoard, setCurrentBoard] = useState(1);
  const [display, setDisplay] = useState(<Display title="board" owner = "train-emoji" cards = {[]}/>);

  const onBoardSelect = (id) => {
    setCurrentBoard(id);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${id}`)
      .then((response) => {
        setDisplay(<Display  title = {response.data.title} owner = {response.data.owner} cards = {response.data.cards}/>)
      })
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/1`) // what if 1 doesnt exist? catch by going to next avail num
      .then((response) => {
        setDisplay(<Display  title = {response.data.title} owner = {response.data.owner} cards = {response.data.cards}/>)
      })
    setDisplay()
  }, [])

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
