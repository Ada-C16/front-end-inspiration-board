import "./App.css";
import NewBoardForm from "./components/NewBoardForm";

function App() {
  // New Board
  const addBoard = (boardInfo) => {
    console.log(boardInfo.title);
    console.log(boardInfo.ownersName);
    // eventually this function will need to send a POST request through axios to the backend to
    // actually create a new board
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        {/* NewBoardForm is used and addBoard function is passed as prop named onAddBoard */}
        <NewBoardForm onAddBoard={addBoard} />
      </main>
    </div>
  );
}

export default App;
