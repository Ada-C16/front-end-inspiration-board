import React, { useState } from 'react';
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import axios from 'axios';
import Card from "./components/Card";

const URL = "http://127.0.0.1:5000/";

const renderBoard = (board) => {
  return (<Board
    title={board.title}
    board_id={board.board_id}
    cards={board.cards}></Board>)
  }

function App() {
  const [cards, setCards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [boards, setBoards] = useState([]); //generates all boards
  const [titleInput, setTitleInput] = useState([]);
  const [ownerInput, setOwnerInput] = useState([]);
  
  const selectBoard = (boards) => {
    let titlesDropDown = boards.map((board) => {
    return (
    <option key = {board.board_id}
    value={board.board_id}>
      {board.title}
      </option>
    );
    });
    return (<div><select name ="Select Board" 
    id ='dropdownButton' 
    onChange={e => setSelectedBoard(parseInt(e.target.value, 10))}>
      {titlesDropDown}
      </select>
      <button class = 'delete button' onClick ={(e) => {
      deleteBoard(selectedBoard)
      console.log(selectedBoard)
    }}>Delete Board</button></div>)
    //onchange to select a specific Board
    //this should be a component, pass in boards as a prop
  };

  useEffect(() => {
    generateBoardList()
  }, []);
  
  useEffect(() => {
    if (selectedBoard == null) {
      return
    }
    axios
      .get(
        `http://localhost:5000/board/${selectedBoard}`
        //this needs to eventually get cards for selected board
        //like board/boardID/cards
        //we do not have a GET route for this yet
      )
      .then((response) => {
        console.log(response.data);
        //setCards([...response.data]);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [selectedBoard]);

  function submitForm() {
    axios.post(`${URL}/board`,
    {
    "title": titleInput,
    "owner": ownerInput,
    }).then((response) => {
      generateBoardList()
    });
    
  };

  function generateBoardList() {
    axios
    .get(`${URL}/board`)
    .then((response) => {
      const boards = response.data;
      const newBoards = [];
      for (let board of boards) {
        newBoards.push({
          board_id: board.board_id,
          title: board.title,
          owner: board.owner
        });
      }
      setBoards(newBoards);
      console.log(boards);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  };

  const submitBoard = () => {
    return (<div id = "create-board">
    <form onSubmit={(e) => {
      e.preventDefault();
      submitForm();
    }}>
    <label htmlFor='Title Input'>
    <input 
    id="board-submission" 
    value = {titleInput}
    onChange ={(e) => {
      setTitleInput(e.target.value);
      }} />
    </label>
    <label htmlFor='Owner Input'>
      <input 
      id="board-submission-2"
      value = {ownerInput}
      onChange = {(e) => {
        setOwnerInput(e.target.value);
      }} />
    </label>
    <button className = 'submit-button'>Submit Board</button>
    </form>
    </div>
    );
  }
  //put this form in another component with generateboard as a prop

  function deleteBoard() {
    axios.delete(`http://localhost:5000/board/${selectedBoard}`
    ).then((response) => {
      console.log(response.data)
      console.log("we are deleting a board")
      generateBoardList()
    });
  }
  const individualCardComponents = cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likes={card.likes}
      />
    );
  });


  const updateCards = (id) => {
    //create function which updates card data with form submission
    //  creating the form 
    //this basically just means to add a new card.. right?
    const newCard = {
      message: cards.message,
    };

    axios
      .post(
        `${URL}:${selectedBoard.id}/cards`, 
        newCard
      )
      .then((response) => {
        console.log(response.data);
        const newCards = [...cards];
        newCards.push(response.data);
        setCards(newCard);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const isBoardSelected = selectedBoard != null ? 
  <Board board_id = {selectedBoard} /> : null;

  return (
    <div className="Page">
      <header className="Header">
        <h1>Inspiration Board</h1>
        <h2>Available Boards: {selectBoard(boards)}</h2>
      </header>
      <main>
      <div>
        {isBoardSelected}
        {submitBoard()}
      </div>
      </main>
    </div>
  );
}

export default App;
