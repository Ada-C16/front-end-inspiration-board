import './App.css';
import Board from './components/Board';
import Card from './components/Card'; 

function App() {
  return (
    <div className="app-container container justify-content-center">
      <header className="App-header">
        <h1>Team Lovelace's Inspiration Boards</h1>
      </header>
      <main>
        <Board />
        <Card />
      </main>
    </div>
  );
}

export default App;
