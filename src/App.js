import  React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Board from './components/Board';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import CardList from './components/CardList';

function App() {
  const [boardData, setBoardData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState(null)
  const [isFormVisible, setIsFormVisible] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5000/boards')
      .then((response) => {
        // console.log(response.data);
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
    axios.post('http://localhost:5000/boards', newBoard)
    .then((response) => {
      // setBoardData(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const readSelectedBoard = (board_id, title) => {
    axios.get(`http://localhost:5000/boards/${board_id}/cards`)
    .then((response) => {
// find board_id in list of boards 
// set selected board to that board object
      setSelectedBoard(response.data);
      console.log(response.data, "this is readselectedboard");
      document.getElementById("selectedBoard").textContent = title;
      // line 47 doc.... is not React-y trying to do something React already does
      // too many axios calls? We already have the info we need?
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const addNewCard = (newCard) => {
    console.log(selectedBoard, "This is selectedBoard")
    axios.post(`http://localhost:5000/boards/${selectedBoard.board_id}/cards`, newCard)
    .then((response) => {
      // setBoardData(response.data)
      
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const createBoardList = () => {
    let boardList = []
    for (let board of boardData) {
      // boardList.push(<li key={board.title}>{board.title}</li>)
      boardList.push(<Board id={board.id} title={board.title} owner_name={board.owner_name} cards={board.cards} onBoardSelect={onBoardSelect} createNewCard={addNewCard} readSelectedBoard={readSelectedBoard}/>)
    }
    return boardList
  }

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
      <CardList />
      <NewCardForm createNewCard={addNewCard} board={boardData} selectedBoard={selectedBoard} />
    </div>
  );
}

export default App;
