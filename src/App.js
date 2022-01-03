import "./App.css";
import React, { useState } from "react";
import Board from "./components/Board";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">Inspiration Board</header>
      <main>
        <Board />
        <Card />
      </main>
    </div>
  );
}

export default App;
