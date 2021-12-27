import React, {useEffect,useState} from "react";
import Display from "./components/Display" 
import Forms from "./components/Forms"
import Card from "./components/Card"
import Board from "./components/Board"

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <Forms />
        <Display />
      </main>
    </div>
  )
};
export default App; 
