import logo from "./logo.svg";
import "./App.css";
import Boards from "./components/Boards";
import CreateANewBoard from "./components/CreateANewBoard";
import SelectedBoard from "./components/SelectedBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Boards />
        <SelectedBoard />
        <CreateANewBoard />
      </header>
    </div>
  );
}

export default App;
