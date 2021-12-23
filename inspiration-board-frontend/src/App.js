// import "./App.css";
import Boards from "./components/Boards";
import Card from "./components/Card";
import CreateANewBoard from "./components/CreateANewBoard";
import SelectedBoard from "./components/SelectedBoard";
import {useState, useEffect} from 'react'; 
import axios from 'axios';

function App() {

  const [boards, setBoards] = useState([{board_id: 127, owner: "Min.", title: "ATLA Quotes"}]
  );
  const [errorMessage, setErrorMessage] = useState('');

  const getBoards = () => {
    axios.get('https://simons-ib-api.herokuapp.com/boards')
      .then((response) => {
        setBoards(response.data);
        // setErrorMessage('');
      }).catch((error) => {
        console.log(error)
        setErrorMessage(<section>{error.response.data.message}</section>);
      });
      
  };

  useEffect(() => {
    console.log("changes were made")
}, [boards] ); 

useEffect(() => {
  getBoards()
  console.log("changes were made")
}, [] ); 
  return (
    <div className="App">
      <header className="App-header">
        <Boards boardsData = {boards} />
        <SelectedBoard />
        <CreateANewBoard />
        <Card />
      </header>
    </div>
  );
}

export default App;
