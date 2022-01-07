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
  const [cardsDisplay, setCardsDisplay] = useState([]);
  let url = process.env.REACT_APP_BACKEND_BOARDS;

    // load board list
    useEffect(() => {
      getBoardListTest();
    }, []);
  
    const getBoardListTest = () => {
      axios.get(url)
      .then((response) => {
        setBoardList(response.data);
      })
      .catch((error) => {
        console.log(error.data)
      });
    }

// make new board
  const onNewBoard = (boardInfo) => {
    if (!boardInfo.title || !boardInfo.owner) {
      alert('Missing Information!')
    } else {
    const newBoard = {
      title: boardInfo.title,
      owner: boardInfo.owner,
      // board_id: boardInfo.board_id +1
    }
    axios.post(url, newBoard)
    .then(function(response) {
      setBoard(response.data);
      getBoardListTest();
      getCardList(response.data.id);
    })
    .catch(function(error) {
      console.log(setErrorMessage(error.data));
    });
  }}

// hide board
  const hideBoard = () => {
    setBoardDisplay(!boardDisplay);
  }

  const checkBoard = (board) => {
    setBoard(board);
    getCardList(board.board_id);
  }
  
  console.log(currentBoard);

  const checkCards = (card) => {
    setCards(card)
    console.log(cards);
  }

// going through the boards to add them to the list
  const addBoardList = boardList.map((oneBoard, index) => {
      return (<p key={oneBoard.id}> 
        <Board id={oneBoard.id} board={oneBoard} current={checkBoard}/>
      </p>)
    })

  const addCard = (card) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard.board_id}/cards`, card)
    .then((response) => {
        console.log(response);
        getCardList(currentBoard.board_id);
    })
    .catch((error) => {
        console.log(error);
        console.log(error.response);
    })
  }

  const getCardList = (board_id) => {
      axios.get(`${url}/${board_id}/cards`)
      .then((response) => {
          setCardsDisplay(response.data);
      })
      .catch((error) => {
          console.log(error);
          console.log(error.response);
      })
  }

  return (
    <div className='App-body'>
      <header>
      <h1 className='Site-name'>Let's Git It Done</h1>
      </header>
      <div className="Board-board">
        {boardDisplay? <NewBoardForm onBoardSubmit = {onNewBoard}/>: ""}
        <button className='Hide-board' onClick={hideBoard}> Hide Board</button>
      </div>
      <div className='Card-board'>
      <NewCardForm createNewCard={addCard}/>
      </div>
      <div className='Display-board-list'> 
      <h3>My Boards</h3>
        <fieldset>
        <ol>{addBoardList}</ol>
      </fieldset>
      </div>
      <div className="board"> 
      <h4>Let's Take A Look Inside...</h4>
      {currentBoard.board_id? currentBoard.title: errorMessage}
      </div>
      <div className='Card-display'>
        <h3>Cards, Cards, Cards!</h3>
        {currentBoard.board_id? <div><CardList url={url} currentBoard={currentBoard.board_id} cards={checkCards} cardsDisplay={cardsDisplay} getCardList={getCardList}/></div>: errorMessage}
      </div>
    </div>
  );
}

export default App;
