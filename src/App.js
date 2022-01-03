import './App.css';
import Card from './components/Card';
import Board from './components/Board';
import  { useEffect, useState } from 'react';
import react from 'react';

function App() {
  const [selectBoard, setSelectBoard] = useState({title: '', owner: '', board_id: null})

  // const selectBoard = () => {
    
  // }

  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <section>
        <h2>Boards</h2>
        <ol>
          {/* <li>Board elements</li> */}
        </ol>
      </section>
      <section>
        <h2>Selected Board</h2>
        <p></p>
      </section>
      <section>
        <h2>Create a New Board</h2>
        <form>
          <label>Title</label>
          <input type="text"></input>
          <label>Owner's Name</label>
          <input type="text"></input>
          <p>Preview: -</p>
          <button type="submit">Submit Query</button>
        </form>
        <span>Hide New Board Form</span>
        {/* <span onClick={}>Hide New Board Form</span> */}
      </section>
      <Board />
    </div>
  );
}

export default App;
