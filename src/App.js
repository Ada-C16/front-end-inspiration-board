import './App.css';
import Card from './components/Card';
import Board from './components/Board';
import  { useEffect, useState } from 'react';
import react from 'react';
import NewBoardForm from './components/NewBoardForm';

function App() {
  const [selectBoard, setSelectBoard] = useState({title: '', owner: '', board_id: null})

  // const selectBoard = () => {
    
  // }
  const onFormSubmit = (e) => {
    e.preventDefault();
    // create a new board 
    // make API call to get all boards
    // boards are in a list
    // add form data to list of boards
    // Next send back new list to API
  }

  const addNewBoard = (newBoard) => {
    let newBoardList = [...allBoards]
    // const nextId = Math.max(...newBoardList.map(board => board.id)) + 1;
    newBoardList.push({
      titleData: newBoard.title,
      ownerData: newBoard.owner
    });
    setBoardData(newBoardList);
    // Next send back new list to API

  }
  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <section>
        <h2>Boards</h2>
        <ol>
          {/* <li>Board elements</li> */}
        </ol>
      </section>
      <section>
        <h2>Selected Board</h2>
        <p></p>
      </section>
      
     <NewBoardForm addNewBoard={addNewBoard} onFormSubmit={onFormSubmit}/>
      <Board />
    </div>
  );
}

export default App;
