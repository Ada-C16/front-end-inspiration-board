import "./App.css";
import BoardsList from "./components/BoardsList";
import NewBoardForm from "./components/NewBoardForm";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewCardForm from "./components/NewCardForm";
import CardsList from "./components/CardsList";

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [showCardForm, setShowCardForm] = useState(false);
  const [messageFormFields, setMessageFormFields] = useState({
    message: "",
    messageValid: false,
    submitDisabled: true,
  });

  const onMessageChange = (event) => {
    let messageValid = event.target.value ? true : false;
    let submitValid = messageValid;
    setMessageFormFields({
      ...messageFormFields,
      message: event.target.value,
      messageValid: true,
      submitDisabled: !submitValid,
    });
  };

  const submitMessageForm = (event) => {
    event.preventDefault();

    let cardsEndpoint =
      process.env.REACT_APP_BACKEND_URL +
      "/" +
      selectedBoard.board_id +
      "/cards";
    axios
      .post(cardsEndpoint, {
        message: messageFormFields.message,
        likes_count: 0,
        board_id: selectedBoard.board_id,
      })
      .then(function (response) {
        console.log(response.data);

        const newCardList = [...cardsData];
        newCardList.push({
          board_id: response.data.board_id,
          card_id: response.data.card_id,
          likes_count: response.data.likes_count,
          message: response.data.message,
        });

        setCardsData(newCardList);
        setMessageFormFields({
          message: "",
          messageValid: false,
          submitDisabled: true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const selectBoard = (board) => {
    let cardsEndpoint =
      process.env.REACT_APP_BACKEND_URL + "/" + board.board_id + "/cards";

    axios
      .get(cardsEndpoint)
      .then((response) => {
        setCardsData([...response.data]);
        setSelectedBoard(board);
        setShowCardForm(true);
      })
      .catch((err) => console.log(err));
  };

  const addNewBoard = (newBoard) => {
    const newBoardList = [...boardsData];

    const nextBoardId =
      Math.max(...newBoardList.map((board) => board.board_id)) + 1;

    newBoardList.push({
      board_id: nextBoardId,
      title: newBoard.titleData,
      owner: newBoard.ownerData,
    });

    setBoardsData(newBoardList);
  };

  const deleteCard = (card) => {
    let cardsEndpoint =
      "https://team-lovelace-api.herokuapp.com/cards/" + card.card_id;
    console.log(card);
    axios
      .delete(cardsEndpoint)
      .then((response) => {
        console.log(response.data);
        const updatedCardsList = cardsData.filter(
          (singleCard) => singleCard.card_id !== card.card_id
        );

        setCardsData(updatedCardsList);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL)
      .then((response) => {
        setBoardsData([...response.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app container">
      <header className="app-header">
        <h1>Team Lovelace's Inspiration Boards</h1>
      </header>
      <main className="container">
        <div className="row">
          <div className="flex-child-board-form col-6">
            <NewBoardForm addBoardCallback={addNewBoard} />
          </div>

          <div className="flex-child-board-list col">
            <BoardsList boards={boardsData} onSelectedBoard={selectBoard} />
          </div>

          <div className="flex-child-card-form col">
            <NewCardForm
              cardFormVisible={showCardForm}
              onMessageFormSubmit={submitMessageForm}
              onMessageChange={onMessageChange}
              messageFormFields={messageFormFields}
            />
          </div>
        </div>

        <div className="row">
          <div className="float-child-card-list justify-content-center col">
            <CardsList allCards={cardsData} deleteCardCallback={deleteCard} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
