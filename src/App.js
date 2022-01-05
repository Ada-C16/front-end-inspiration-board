import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import axios from 'axios';

const generateCards = () => {
  //this instantiates a Get request in a useEffect
  //need to format it to the card object in a different function
  return
}

const fakeBoards = [{
  board_id: 1,
  title: "title",
  owner: "owner"
},
{board_id: 2,
title: "title2",
owner: "owner2"}];

const renderBoard = (board) => {
  return (<Board
    title={board.title}
    id={board.id}
    cards={board.cards}></Board>)
}

const selectBoard = (boards) => {
  let titlesDropDown = boards.map((board) => {
  return (
  <option 
  value={board.board_id}>
    {board.title}
    </option>
  );
  });
  return (<div><select name ="Select Board" id ='dropdownButton'>
    {titlesDropDown}
    </select></div>)
  //onclick to select a specific Board
}

function App() {
  const [cards, setCards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [boards, setBoards] = useState([]); //generates all boards
  
  //const setSelectedBoard = ({boardId}) => {
  //  axios.get(`board/${boardId}/cards`)
  //}

  //GET all of boards via /board in useEffect - as soon as you open up application
  //GET all of cards in selected board via /board/boardID/cards - onclickBoard

  const updateCards = (id) => {
    //create function which updates card data with form submission
    return
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
        <h2>Available Boards: {selectBoard(fakeBoards)}</h2>
      </header>
      <main>
      
      </main>
    </div>
  );
}

export default App;
