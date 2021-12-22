import './App.css';
import Boardz from './components/Boardz';
import CardDisplay from './components/CardDisplay'; 
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';
import {useState } from 'react';

function App() {

  const [boardList, setBoardList] = useState([])
  
  const addNewBoard = newBoard => {
    const newBoardList = [...boardList]

    newBoardList.push({
      title: newBoard.boardName,
      owner: newBoard.boardOwner
    })
  
    setBoardList(newBoardList);
    console.log(newBoardList)

  }

  return (
    <section>
      <header>
      </header>
      <div className='grid-layout-container'>
        <section className='site-title-block grid-block'>
          <p className='site-title'>InspoBoard</p>
        </section>
        <Boardz />
        <NewCardForm />
        <NewBoardForm addNewBoardCallback={addNewBoard} />
        <CardDisplay />
      </div>
    </section>
  );
}

export default App;
