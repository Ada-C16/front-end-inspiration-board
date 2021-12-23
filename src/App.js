import "./App.css";
import NewBoardForm from "./components/NewBoardForm";

function App() {
  // New Board
  const addBoard = (boardInfo) => {
    console.log(boardInfo.title);
    console.log(boardInfo.ownersName);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <NewBoardForm onAddBoard={addBoard} />
      </main>
    </div>
  );
}

export default App;
