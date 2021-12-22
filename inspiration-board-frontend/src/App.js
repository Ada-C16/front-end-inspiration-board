import "./App.css";
import Boards from "./components/Boards";
import Card from "./components/Card";
import CreateANewBoard from "./components/CreateANewBoard";
import SelectedBoard from "./components/SelectedBoard";

function App() {
  return (
    <header>
      <div>
        <Boards />
      </div>
      <div>
        <SelectedBoard />
      </div>
      <div>
        <CreateANewBoard />
      </div>
      <div>
        <Card />
      </div>
    </header>
  );
}

export default App;
