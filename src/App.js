import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'

const generateCards = () => {
  //this function generates the list of cards used in board
  const cards = [];

  let currentId = 0;

  for (let cardId = 0; cardId < Board.length; cardId +=1) {
    cards.push({
      id: currentId,
      text: '',//import value
      likes: '',//import likeCount
    })
  }
  return cards
}

function App() {
  const [cards, setCards] = useState(generateCards());
  const updateCards = (id) => {
    //create function which updates card data with form submission
    return
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
        <h2>Available Boards: </h2>
      </header>
      <main>
        <Board cards={cards} updateCards={updateCards} />
      </main>
    </div>
  );
}

export default App;
