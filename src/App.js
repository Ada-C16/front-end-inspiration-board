import './App.css';
import Board from './components/Board.js';
import Card from './components/Card.js';
import NewCard from './components/NewCard.js';
import NewBoardForm from './components/NewBoardForm.js'
import CardList from './components/CardList.js';


function App() {

  const addTask = (task) => {
    console.log(task);

    axios
      .post(URL + "/tasks", {
        title: task.text,
        // eslint-disable-next-line camelcase
        completed_at: task.done ? new Date() : null,
        description: "",
      })
      .then((response) => getTasks())
      .catch((error) => console.log(error.response.data));
  };

  return (
    <div className="App">
      <Board />
      <Card />
      <NewCard />
      <CardList />
      <NewBoardForm />
    </div>
  );
}

export default App;
