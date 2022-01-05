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
    .catch(error => {
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
      <h1 className="boardTitle">Inspiration Board</h1>
      <section className="main">
        <section>
          <h2>Boards</h2>
          {/* <select id="boardSelect" multiple>
            <option></option>
          </select> */}
          <ol>
            {createBoardList()}
          </ol>
        </section>
        <section>
          <h2>Selected Board</h2>
          <p>Select a Board from the Board List!</p>
        </section>
        <NewBoardForm createNewBoard={addNewBoard}/>
      </section>
      <Board board={boardData} onBoardSelect={onBoardSelect}/>
    </div>
  );
}

export default App;
