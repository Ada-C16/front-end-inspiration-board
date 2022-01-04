import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import CardList from "./components/CardList";
import NewBoard from "./components/NewBoard";
import NewCard from "./components/NewCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">Inspiration Board</header>
      <div className="App-board">
        <Board />
      </div>
      <div className="App-card">
        <CardList />
      </div>
      <div className="App-sidebar">
        <NewBoard />
        <NewCard />
      </div>
    </div>
  );
}

export default App;
