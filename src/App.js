import "./App.css";
import axios from "axios";
import Boards from "./components/Boards";
// import CardsForSelectedBoard from "./components/CardsForSelectedBoard";
import CreateANewBoard from "./components/CreateANewBoard";
import CreateANewCard from "./components/CreateANewCard";
import Logo from "./components/Logo";
import SelectedBoard from "./components/SelectedBoard";
import { useState, useEffect } from "react";
import CardsForPickMeUpQuotes from "./components/CardsForSelectedBoard";

function App() {
  const [boardsData, setBoards] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeBoard, setActiveBoard] = useState(0);
  const [activeBoardTitle, setActiveBoardTitle] = useState("");
  const [activeOwnerName, setActiveOwnerName] = useState("");
  const [cardsData, setCardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
  });

  const getBoards = () => {
    axios
      .get("https://trm2-inspiration-board.herokuapp.com/boards")
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
  }, []);

  //Create a new Card
  const postANewCardForm = (cardsData) => {
    console.log(cardsData);
    const cards = { message: cardsData };
    axios
      .post(
        `https://trm2-inspiration-board.herokuapp.com/boards/${activeBoard}/cards`,
        cards
      )
      .then((response) => {
        console.log(response, "response");
        getCardsfromBoard();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Get cards from Board
  const [cardListData, setCards] = useState([{}]);
  const getCardsfromBoard = () => {
    axios
      .get(
        `https://trm2-inspiration-board.herokuapp.com/boards/${activeBoard}/cards`
      )
      .then((response) => {
        setCards(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // delete card
  const deleteCard = (card) => {
    axios
      .delete(
        `https://trm2-inspiration-board.herokuapp.com/boards/${activeBoard}/cards`
      )
      .then((response) => {
        const newCardsData = cardsData.filter((existingCard) => {
          return existingCard.card_id !== card.card_id;
        });
        setCardsData(newCardsData);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't delete the card.");
      });
  };

  const addBoardData = (newBoard) => {
    axios
      .post("https://trm2-inspiration-board.herokuapp.com/boards", newBoard)
      .then((response) => {
        console.log(response, "response");

        const newBoardList = [...boardsData];

        newBoardList.push({
          owner: newBoard.owner,
          title: newBoard.title,
          id: response.data.board.board_id,
        });
        console.log(newBoardList, "NEWWWBoaardLIST");
        setBoards(newBoardList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addSetActiveBoard = (Board) => {
    console.log(Board, "BOARDDDDDDD");
    setActiveBoard(Board.id);
    setActiveBoardTitle(Board.title);
    setActiveOwnerName(Board.owner);
  };

  useEffect(() => {
    getCardsfromBoard();
  }, [activeBoard]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Logo />
        </div>
        <div className="col">
          <Boards
            boardsData={boardsData}
            setActiveBoardCallback={addSetActiveBoard}
            getCards={getCardsfromBoard}
          />
          {errorMessage}
        </div>
        <div className="col">
          <SelectedBoard title={activeBoardTitle} owner={activeOwnerName} />
          <p>
            {selectedBoard.title ? (
              `${selectedBoard.title} - ${selectedBoard.owner}`
            ) : (
              <em>"Select a Board from the Board List!"</em>
            )}
          </p>
        </div>
        <div className="col">
          <CreateANewBoard
            boards={boardsData}
            addBoardCallback={addBoardData}
          />
        </div>

        <div className="row">
          <div className="col">
            <CardsForPickMeUpQuotes
              title={activeBoardTitle}
              cardListData={cardListData}
            />
            {/* <Card  /> */}
          </div>
          <div className="col">
            <CreateANewCard postANewCard={postANewCardForm} />
          </div>
        </div>
      </div>
      <div className="footer">
        <p></p>
        <footer className="container text-center">©TRM2 2022</footer>
        <p></p>
      </div>
    </div>
  );
}

export default App;
