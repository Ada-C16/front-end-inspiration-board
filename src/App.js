import React, {useEffect,useState} from "react";
import Display from "./components/Display" 
import Forms from "./components/Forms"
import Card from "./components/Card"
import Board from "./components/Board"

const App = () => {
  return (
    <div className="App">
      <main>
        <Board></Board>
      </main>
    </div>
  )
};
export default App; 
