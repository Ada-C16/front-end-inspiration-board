import  React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Board from './components/Board';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import CardList from './components/CardList';

const REACT_APP_BACKEND_URL = process.env['REACT_APP_BACKEND_URL'];

function App() {
  const [boardData, setBoardData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState({})

  useEffect(() => {
    axios.get(`${REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        setBoardData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onBoardSelect = () => {
    return true
  }

  const addNewBoard = (newBoard) => {
    axios.post(`${REACT_APP_BACKEND_URL}/boards`, newBoard)
    .then((response) => {
      newBoard["id"]=response.data.id
      let newBoardData = [...boardData]
      newBoardData.push(newBoard)
      setBoardData(newBoardData)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const readSelectedBoard = (board_id, title) => {
    axios.get(`${REACT_APP_BACKEND_URL}/boards/${board_id}/cards`)
    .then((response) => {

      setSelectedBoard(response.data);
      document.getElementById("selectedBoard").textContent = title;
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const addNewCard = (newCard) => {
    axios.post(`${REACT_APP_BACKEND_URL}/boards/${selectedBoard.id}/cards`, newCard)
    .then((response) => {
      newCard['card_id'] = response.data.response_body.card_id
      newCard['likes'] = response.data.response_body.likes
      let newCardData = [...selectedBoard.cards]
      let newSelectedBoard = {...selectedBoard}
      newCardData.push(newCard)
      newSelectedBoard['cards'] = newCardData
      setSelectedBoard(newSelectedBoard)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const createBoardList = () => {
    let boardList = []
    for (let board of boardData) {
      boardList.push(<Board key={board.id} id={board.id} title={board.title} owner_name={board.owner_name} cards={board.cards} onBoardSelect={onBoardSelect} createNewCard={addNewCard} readSelectedBoard={readSelectedBoard}/>)
    }
    return boardList
  }

  const deleteCard = (card_id) => {
    axios
      .delete(`${REACT_APP_BACKEND_URL}/cards/${card_id}`)
      .then((response) => {
        let newSelectedBoard = {...selectedBoard} 
        // {board_id, Board_name, cards:[{}]}
        let newCardList = [];
        for (let card of selectedBoard.cards) {
          if (card.id !== card_id) {
            newCardList.push(card);
          }
        }
        newSelectedBoard['cards'] = newCardList
        setSelectedBoard(newSelectedBoard)
        let newBoardData = [...boardData]
        for (let board of newBoardData) {
          if (board.id === newSelectedBoard.id) {
            board = newSelectedBoard;
          }
        }
        setBoardData(newBoardData)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  return (
    <div className="App">
      <h1 className="boardTitle">Inspiration Board</h1>
      <section className="main">
        <section>
          <h2>Boards</h2>
          <select id="boardSelect" multiple>
            {createBoardList()}
          </select>
        </section>
        <section>
          <h2>Selected Board</h2>
          <p id="selectedBoard">Select a Board from the Board List!</p>
        </section>
        <NewBoardForm createNewBoard={addNewBoard}/>
      </section>
      {selectedBoard !== undefined ? <CardList cards={selectedBoard.cards} deleteCard={deleteCard} /> : <CardList />}
      <NewCardForm createNewCard={addNewCard} board={boardData} selectedBoard={selectedBoard} />
    </div>
  );
}

export default App;
