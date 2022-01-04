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
      <main>
        <div>
          <Board />
        </div>
        <div>
          <CardList />
        </div>
        <div>
          <NewBoard />
          <NewCard />
        </div>
      </main>
    </div>
  );
}

export default App;
