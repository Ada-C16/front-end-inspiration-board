import  React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Board from './components/Board';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import CardList from './components/CardList';

function App() {
  const [boardData, setBoardData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState({})
  const [isFormVisible, setIsFormVisible] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5000/boards')
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
    axios.post('http://localhost:5000/boards', newBoard)
    .then((response) => {
      newBoard["id"]=response.data.id
      let newBoardData = [...boardData]
      newBoardData.push(newBoard)
      setBoardData(newBoardData)
      console.log("response from post newboard", response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const readSelectedBoard = (board_id, title) => {
    axios.get(`http://localhost:5000/boards/${board_id}/cards`)
    .then((response) => {

      setSelectedBoard(response.data);
      console.log(response.data, "this is readselectedboard");
      document.getElementById("selectedBoard").textContent = title;
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const addNewCard = (newCard) => {
    console.log(selectedBoard, "This is selectedBoard")
    axios.post(`http://localhost:5000/boards/${selectedBoard.id}/cards`, newCard)
    .then((response) => {
      newCard['card_id'] = response.data.response_body.card_id
      newCard['likes'] = response.data.response_body.likes
      let newCardData = [...selectedBoard.cards]
      let newSelectedBoard = {...selectedBoard}
      newCardData.push(newCard)
      newSelectedBoard['cards'] = newCardData
      setSelectedBoard(newSelectedBoard)
      console.log('HHHHHHHHHHHHHHHHHHHH')
      console.log(boardData)
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
      boardList.push(<Board key={board.id} id={board.id} title={board.title} owner_name={board.owner_name} cards={board.cards} onBoardSelect={onBoardSelect} createNewCard={addNewCard} readSelectedBoard={readSelectedBoard}/>)
    }
    return boardList
  }

  const deleteCard = (card_id) => {
    axios
      .delete(`http://localhost:5000/cards/${card_id}`)
      .then((response) => {
        let newSelectedBoard = {...selectedBoard}
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
    // filter takes a func as an arg/ Give us all the tasks except the ones that are equal to that id
    // const newTasks = tasks.filter((task) => task.id !==id);
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
