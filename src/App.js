import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import axios from 'axios';
import Card from "./components/Card";

//const generateCards = () => {
  //this instantiates a Get request in a useEffect
  //need to format it to the card object in a different function
  

  

const fakeBoards = [{
  board_id: 1,
  title: "title",
  owner: "owner"
},
{board_id: 2,
title: "title2",
owner: "owner2"}];

const renderBoard = (board) => {
  return (<Board
    title={board.title}
    id={board.id}
    cards={board.cards}></Board>)
}

const selectBoard = (boards) => {
  let titlesDropDown = boards.map((board) => {
  return (
  <option 
  value={board.board_id}>
    {board.title}
    </option>
  );
  });
  return (<div><select name ="Select Board" id ='dropdownButton'>
    {titlesDropDown}
    </select></div>)
  //onclick to select a specific Board
}

function App() {
  const [cards, setCards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [boards, setBoards] = useState([]); //generates all boards
  
  //const setSelectedBoard = ({boardId}) => {
  //  axios.get(`board/${boardId}/cards`)
  //}
  //GET all of boards via /board in useEffect - as soon as you open up application
  useEffect(() => {
    axios
      .get("localhost5000:/board")
      .then((response) => {
        console.log(response.data);
        setBoards([...response.data]);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const selectBoard = (board) => {
    setSelectedBoard(board);
  };
  //GET all of cards in selected board via /board/boardID/cards - onclickBoard
  useEffect(() => {
    axios
      .get(
        `https:localhost5000:${selectedBoard.id}/cards`
      )
      .then((response) => {
        console.log(response.data);
        setCards([...response.data]);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [selectedBoard]);

  const individualCardComponents = cardsList.map((card) => {
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
      message: card.message,
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
        setCards(newCardsList);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
        <h2>Available Boards: {selectBoard(fakeBoards)}</h2>
      </header>
      <main>
      
      </main>
    </div>
  );


export default App;
