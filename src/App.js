import axios from "axios";
import React, {useEffect,useState} from "react";
import Display from "./components/Display"; 
import Forms from "./components/Forms";

const App = () => {

  const [currentBoard, setCurrentBoard] = useState(1);
  const [display, setDisplay] = useState(<Display />);
  const onBoardSelect = (id) => {
    setCurrentBoard(id);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard}`) // stringify?
      .then((response) => {
        console.log(response.data)
        setDisplay(<Display  title = {response.data.title} owner = {response.data.owner}/>)
      })
  };

  // useEffect((currentBoard) => {
  //   //onBoardSelect(currentBoard);
  //   //setCurrentBoard(id);
  //   axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard}`) // stringify?
  //     .then((response) => {
  //       console.log(response.data)
  //       setDisplay(<Display />)
  //     })
  // }, [])


  return (
    <div className="App">
      <header>
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <Forms onBoardSelect = {onBoardSelect}/>
        {display}
      </main>
    </div>
  )
};
export default App; 
