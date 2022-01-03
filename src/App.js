import './App.css';
import BoardList from './components/BoardList';
import BoardForm from './components/BoardForm';
import CardList from './components/CardList';
import React, { useState } from 'react';
import CardForm from './components/CardForm';
import axios from "axios";

const CARDS = [{id:1, message:"Hi hello", likes_count: 1}, 
                {id:2, message:"Howdy", likes_count: 1},
                {id:3, message:"Yoohoo", likes_count: 1}]

const BOARDS = [{id:1, owner:"owner a", title: "Title 1"}, 
                {id:2, owner:"owner b", title: "Title 2"}, 
                {id:3, owner:"owner c", title: "Title 3"}]


function App() {

  // ---------------------------------------------------------------
  // --------------------- ESTABLISHING STATES --------------------- 
  // ---------------------------------------------------------------
  // This sets up the state for the 'Board Selected' value
  const [selectedBoard, setSelectedBoard] = useState('');
  
  // This sets up the state for the boards displayed in 'Boards'
  const [boards, setBoards] = useState(BOARDS);
  
  // This sets up the state for the cards displayed in 'Cards for Board'
  const [cards, setCards] = useState(CARDS)

  // ---------------------------------------------------------------
  // ------------------- SETTING STATES FUNCTIONS------------------- 
  // ---------------------------------------------------------------
  // This sets state for the 'Board Selected' value when a board is clicked
  const selectBoard = (id) => { 
    for (let board of boards) { // I think this should be boards not BOARDS? 
      if (id===board.id) {
        setSelectedBoard(board.title)
      }}}

  // This sets the state for the 'Boards', this changes when a new board is added, we will also need to add functionality to delete all?
  const addBoard = (boardInfo) => {
    const num = 4 // We can delete this when we link up to database since the id will be generated through that. 
    const newBoard = {id: num, owner: boardInfo.owner, title: boardInfo.title}
    const updatedBoards = [...boards]
    updatedBoards.push(newBoard)
    setBoards(updatedBoards)
  }

  // This sets the state for the 'Cards', this changes when a card is liked
  const updateCardLikes = (id) => {
      const updatedCards = [...cards]
      for (let card of updatedCards) {
        if (id === card.id) {
          card.likes_count++
        }
      }
      setCards(updatedCards)
    }

  // This sets the states for 'Cards', this changes when a card is deleted from the deck
  const deleteCard = (id) => {
    const updatedCards = [...cards]
    const newCards = updatedCards.filter((card) => {
      if (card.id !== id) {
        return card
      }
    })
    setCards(newCards)
    }
  
  // This sets the states for 'Cards', this changes when a card is added to the deck
  const addCard = (cardInfo) => {
    const num = 4 // We can delete this when we link up to database since the id will be generated through that. 
    const newCard = {id: num, message: cardInfo.message, likes_count: cardInfo.likes_count}
    const updatedCards = [...cards]
    updatedCards.push(newCard)
    setCards(updatedCards)
  }

  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      
      <section className='boards_container'>
        <section>
          <h2>Boards</h2>
          <BoardList boards={boards} onClickBoard={selectBoard}/>
        </section>
        
        <section>
          <h2>Board Selected</h2>
          <ul>
              <li>
                {selectedBoard}
              </li>
          </ul>
        </section>

        <section>
          <h2>Create a New Board</h2>
          <BoardForm onClickAddBoard={addBoard}/>
        </section>
      </section>
      
      <section className='cards_container'>
        <section>
          <h2>Cards for Board</h2>
          <CardList cards={cards} onClickLike={updateCardLikes} onClickDelete={deleteCard}/>
        </section>
        
        <section>
            <h2>Create A New Card</h2>
            <CardForm onClickAddCard={addCard} />
          </section>
      </section>    
    </div>
  );
}

export default App;
