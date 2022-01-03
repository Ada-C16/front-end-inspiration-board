import React, { useState } from 'react';

function Boards() {
  const boards = [
    {
      id : 1,
      title : "Inspirational Quotes",
      owner :  "Nourhan",
      cards : [] 
    }, 
    {
      id : 2,
      title : "Workout Goals",
      owner :  "Tanja",
      cards : [] 
    }, 
    {
      id : 3,
      title : "Chores",
      owner :  "Ahmed",
      cards : []
    }, 
    {
      id : 4,
      title : "Reminders",
      owner :  "Yousef",
      cards : [] 
    }, 
    {
      id : 5,
      title : "Meal Plan",
      owner :  "Sarah",
      cards : [] 
    }, 
  ]
  
  const [selectedBoard, setSelectedBoardTitle] = useState(null);  
  const [selectedOwner, setSelectedOwner] = useState(null)
  const [newBoardTitle, setNewBoardTitle] = useState('');
  const [boardList, setBoardList] = useState(boards)


  const renderBoardList = (boardList) => {
      return boardList.map(board => {
      return (
        <option key={board.id} value={board.id} label={board.title}>{board.title}</option>
      )
    })
  }

  const handleOptionSelect = (event) => { 
    const selectedBoard = boards.find(board => board.id === parseInt(event.target.value))
    setSelectedBoardTitle(selectedBoard.title)
    setSelectedOwner(selectedBoard.owner)
  }


  return (
    <div className="App">
      <h2> Boards </h2>
      <select size={boards.length} onChange={handleOptionSelect}>{renderBoardList(boards)}</select>
      { selectedBoard ? <h2> Board Selected: {selectedBoard}</h2> : <h2> Select a Board </h2>}
      { selectedOwner && <h2> Owner Selected: {selectedOwner} </h2>}
      <h3> Create A New Board</h3>
      <label> Title </label>
      <input value={newBoardTitle} onInput={event => setNewBoardTitle(event.target.value)}/>
      <p>{newBoardTitle}</p>
      <label> Owner's Name </label>
      <input></input>
      <button> Submit </button>
    

    </div>
  );
}

export default Boards;
