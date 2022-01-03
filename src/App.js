import './App.css';
import Boards from './components/Boards';
import Card from './components/Card';

function App() {
  return (
    <main>
      <div className="App">
        <h1> Inspiration Board </h1>
        <Boards />
      </div>
      <Card/>
    </main>
)
}

export default App;
