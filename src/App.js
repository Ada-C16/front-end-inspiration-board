import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import NewBoardForm from './components/NewBoardForm';
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
const axios = require('axios');

function App() {
  const [currentBoard, setBoard] = useState({title: '', owner: '', board_id: 0});
  const [boardList, setBoardList] = useState([]);
  const [cards, setCards] = useState({message: '', card_likes: null})
  const [boardDisplay, setBoardDisplay] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  let url = process.env.REACT_APP_BACKEND_BOARDS;

// make new board
  const onNewBoard = (boardInfo) => {
    const newBoard = {
      title: boardInfo.title,
      owner: boardInfo.owner,
      board_id: boardInfo.board_id +1
    }
    axios.post(url, newBoard)
    .then(function(response) {
      setBoard(response.data)
      console.log(response);
    })
    .catch(function(error) {
      console.log(setErrorMessage(error.data));
    });
  }


// hide board
  const hideBoard = () => {
    setBoardDisplay(!boardDisplay);
  }

  const checkBoard = (board) => {
    setBoard(board)
    console.log(currentBoard);
  }

  const checkCards = (card) => {
    setCards(card)
    console.log(cards);
  }

// load board list
  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setBoardList(response.data);
    })
    .catch((error) => {
      console.log(error.data)
    });
  }, );

// going through the boards to add them to the list
  const addBoardList = boardList.map((oneBoard, index) => {
      return (<p> 
        <Board key={index+1} id={index+1} board ={oneBoard} current={checkBoard}/>
      </p>)
    })

  return (
    <body className='App-body'>
    {/* <div className='App-body'> */}
      <header>
      <h1 className='Site-name'>Let's Git It Done</h1>
      </header>
      <div className="Board-board">
        {boardDisplay? <NewBoardForm onBoardSubmit = {onNewBoard}/>: ""}
        <button className='Hide-board' onClick={hideBoard}> Hide Board</button>
      </div>
      <div className='Card-board'>
      <NewCardForm />
      <button className="create-new-card">Create Card</button>
      </div>
      <div className='Display-board-list'> 
      <h3>My Boards</h3>
        <fieldset>
        <ol>{addBoardList}</ol>
      </fieldset>
      </div>
      <div className="board"> 
      <h3>Let's Take A Look Inside...</h3>
      <fieldset>
      {currentBoard.board_id? currentBoard.title: errorMessage}
      </fieldset>
      </div>
      <div className='Card-display'>
        <h3>Cards, Cards, Cards!</h3>
        {currentBoard.board_id? <div><CardList url={url} currentBoard={currentBoard.board_id} cards={checkCards}/></div>: errorMessage}
      </div>
    {/* </div> */}
    </body>
  );
}

export default App;
