import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Boards from './components/Boards.js';
import BoardForm from './components/BoardForm';

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
  
  return (
    <div className="App">
      <Boards boards={boards}/>
      <BoardForm/>  
    </div>
  );
}



export default App;
