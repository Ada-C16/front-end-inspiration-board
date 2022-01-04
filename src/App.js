import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Boards from './components/Boards.js';
import BoardForm from './components/BoardForm';
import CardForm from './components/CardForm';
import Cards from './components/Cards';

const App = () => {
  const BOARDS = [
    {title: "board1",
    owner: "Sophia",
    board_id: 1},
    
    {title: "board2",
    owner: "Jessica",
    board_id: 2}, 
    
    {title: "board3",
    owner: "Makhabat",
    board_id: 3}, 
    
    {title: "board4",
    owner: "Alie",
    board_id: 4}
  ]
  const [boards, updateBoards] = useState(BOARDS);

  const CARDS = [
    {
      message: 'Message1',
      card_id: 1,
      board_id: 4,
      votes: 2
    },
    {
      message: 'Message2',
      card_id: 2,
      board_id: 4,
      votes: 30
    },
    {
      message: 'Message3',
      card_id: 3,
      board_id: 1,
      votes: 0
    }
  ]
  const [cards, updateCards] = useState(CARDS);
  
  return (
    <div className="App">
      <Boards boards={boards}/>
      <BoardForm/>
      <Cards cards={cards}/>
      <CardForm/>
    </div>
  );
}



export default App;
