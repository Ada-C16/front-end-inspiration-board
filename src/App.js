import React, { useState } from 'react';
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import axios from 'axios';
import Card from "./components/Card";

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
      </select></div>)
    //onchange to select a specific Board
    //this should be a component, pass in boards as a prop
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/board")
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
        `https://localhost5000:${selectedBoard.id}/cards`, 
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
        <h2>Available Boards: {selectBoard(boards)}</h2>
      </header>
      <main>
      <div>
        <p>{selectedBoard}</p>
        <Board board_id = {selectedBoard} />
      </div>
      </main>
    </div>
  );
}

export default App;
