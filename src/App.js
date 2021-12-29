import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import BoardSelector from "./components/BoardSelector";
import CurrentBoard from "./components/CurrentBoard";
import CardList from "./components/CardList";


function App() {
  const boards = [
    { id: 1, title: "Hello World", author: "Pals" },
    { id: 2, title: "Dinner Tonight", author: "Pals" },
  ];
  const cards = [
    {id:1, message: "Hello Ayaka Faith" ,likes:0, boardId:1},
    {id:2, message: "Hello Andrea" ,likes:0, boardId:1},
  ];

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
  // here selectedCard is just a placeholder
  const increaseLikes = (selectedCard) =>{
    console.log(selectedCard)
  
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        {/* NewBoardForm is used and addBoard function is passed as prop named onAddBoard */}
        <NewBoardForm onAddBoard={handleAddBoard} />
        <NewCardForm onAddCard={handleAddCard} />
        <BoardSelector boards={boards}></BoardSelector>
        <CurrentBoard board={boards[0]}></CurrentBoard>
        <CardList cards={cards} onIncreaseLikes ={increaseLikes}/>
      </main>
    </div>

  );
}

export default App;
