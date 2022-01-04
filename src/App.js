import  React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Board from './components/Board';
import NewBoardForm from './components/NewBoardForm';

function App() {
  const [boardData, setBoardData] = useState([])
  const [selectBoarded, setSelectedBoard] = useState({title: '', owner: '', board_id: null})
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

  // useEffect(() => {
  //   axios.get('http://localhost:5000/boards')
  //     .then((response) => {
  //       // console.log(response.data);
  //       setBoardData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [boardData]);

  const onBoardSelect = () => {
    return true
  }

  const addNewBoard = (newBoard) => {
    axios.post('http://localhost:5000/boards', newBoard)
    .then(response => {
      // setBoardData(response.data)
      console.log(response.data)
    })
    .error(error => {
      console.log(error)
    })
  }

  const createBoardList = () => {
    let boardList = []
    for (let board of boardData) {
      boardList.push(<li key={board.title}>{board.title}</li>)
    }
    return boardList
  }

  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <section>
        <h2>Boards</h2>
        <ol>
          {createBoardList()}
        </ol>
      </section>
      <section>
        <h2>Selected Board</h2>
        <p></p>
      </section>
      <NewBoardForm createNewBoard={addNewBoard}/>
      <Board board={boardData} onBoardSelect={onBoardSelect}/>
    </div>
  );
}

export default App;
