import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";



function App() {
  // New Board
  const handleAddBoard = (boardInfo) => {
    console.log(boardInfo.title);
    console.log(boardInfo.ownersName);
    // eventually this function will need to send a POST request through axios to the backend to
    // actually create a new board

    // add newBoard to db
  };

  // New Card
  const handleAddCard = (message) => {
    console.log(message);

    // add newCard to db
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        {/* NewBoardForm is used and addBoard function is passed as prop named onAddBoard */}
        <NewBoardForm onAddBoard={handleAddBoard} />
        <NewCardForm onAddCard={handleAddCard} />
      </main>
    </div>

  );
}

export default App;
