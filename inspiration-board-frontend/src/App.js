import "./App.css";
import Boards from "./components/Boards";
import Card from "./components/Card";
import CreateANewBoard from "./components/CreateANewBoard";
import SelectedBoard from "./components/SelectedBoard";
import Board from "./components/Board";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateANewCard from "./components/CreateANewCard";
import CardsForPickMeUpQuotes from "./components/CardsForSelectedBoard";

function App() {
  const [boardsData, setBoards] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeBoard, setActiveBoard] = useState(2)

  const getBoards = () => {
    axios
      .get('https://trm2-inspiration-board.herokuapp.com/boards' )
      .then((response) => {
        setBoards(response.data);
        // setErrorMessage('');
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(<section>{error.message}</section>);
      });
  };

  useEffect(() => {
    getBoards();
    getCardsfromBoard();
    console.log("changes were made");
  }, []);
  
  //Create a new Card 
  const postANewCardForm = (cardsData) => {
    console.log(cardsData)
    const cards = {"message":cardsData}
    axios
      .post(`https://trm2-inspiration-board.herokuapp.com/boards/${activeBoard}/cards`,cards)
      .then((response) => {
        console.log(response, "response");
        getCardsfromBoard();
      })
      .catch((error) => {
        console.log(error);
      }
      )
  };
  //Get cards from Board 
  const [cardListData, setCards] = useState([{}]);
  const getCardsfromBoard = () => {

    axios 
      .get(`https://trm2-inspiration-board.herokuapp.com/boards/${activeBoard}/cards`)
      .then ((response) => {
        setCards(response.data);
        console.log(response);
      })
      .catch ((error) => {
        console.log(error);
      }
      )
  }; 

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Boards boardsData={boardsData} />
          {errorMessage}
        </div>
        <div className="col">
          <SelectedBoard />
        </div>
        <div className="col">
          <CreateANewBoard />
        </div>

        </div>
      
        <div className = 'row'>
          <div className = 'col'>
            <CardsForPickMeUpQuotes cardListData={cardListData} /> 
            {/* <Card  /> */}
          </div>
          <div className = 'col'><CreateANewCard 
          postANewCard ={postANewCardForm}/> </div>
        </div>
    
    </div>
  );
}

export default App;
