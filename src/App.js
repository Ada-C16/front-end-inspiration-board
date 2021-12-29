import axios from "axios";
import React, {useEffect, useState} from "react";
import Display from "./components/Display"; 
import Forms from "./components/Forms";
import "./App.css";


const App = () => {
  /// TESTING: REMOVE WHEN LINKED CARDS ADDED TO DB
  const sampleCards = [{id: 1, message: "words", likes_count:2}, {id: 2, message: "words", likes_count:4}, {id: 3, message: "words", likes_count:10}];
  /// END TESTING

  const [currentBoard, setCurrentBoard] = useState(1);
  const [display, setDisplay] = useState(<Display id = "1" title="board" owner = "train-emoji" cards = {[]}/>);
  
  const onBoardSelect = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute('id');

    setCurrentBoard(option);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${option}`)
      .then((response) => {
        setDisplay(<Display  title = {response.data.title} owner = {response.data.owner} cards = {sampleCards}/>)
        /// TESTING: REVERT PARAMETER WHEN CARDS WORK ^^^
        // cards = {response.data.cards}
        /// END TESTING
      })
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/1`) // what if 1 doesnt exist? catch by going to next avail num
      .then((response) => {
        setDisplay(<Display  title = {response.data.title} owner = {response.data.owner} cards = {response.data.cards}/>)
      })
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
