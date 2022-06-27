import "./App.css";
import React, { useState, useEffect } from "react";
import SelectBoard from "./components/SelectBoard";
import CardForm from "./components/CardForm";
import CardContainer from "./components/CardContainer";
import BoardForm from "./components/BoardForm";
import axios from "axios";

function App() {
  const [boardData, setBoardData] = useState([]);

  // SelectBoard.js State and Event Handlers (as they relate to Card Container)
  const [board, setBoard] = useState(undefined);

  //   CardContainer.js State and Event Handlers (cardsByBoardId: an object of arrays where the key is board_id)
  const [cardsByBoardId, setCardsByBoardId] = useState({});

  const increaseLikes = (card) => {
    const newCardsByBoardId = { ...cardsByBoardId };
    axios
      .patch(
        `https://backend-awesome-inspir-board.herokuapp.com/cards/${card.card_id}`,
        {
          likes_count: 1,
        }
      )
      .then((response) => {
        if (!cardsByBoardId[board.board_id]) {
          return;
        }
        const modifiedCard = cardsByBoardId[board.board_id].find(
          (currentCard) => currentCard.card_id === card.card_id
        );
        if ("likes_count" in modifiedCard) {
          modifiedCard.likes_count += 1;
        }
        setCardsByBoardId(newCardsByBoardId);
      });
  };

  const updateBoard = (event) => {
    const modifiedBoard = boardData.find((currentBoard) => {
      return currentBoard.title.trim() === event.target.value.trim();
    });

    // Loads all the cards associated with the selected board.
    axios
      .get(
        `https://backend-awesome-inspir-board.herokuapp.com/boards/${modifiedBoard.board_id}/allcards`
      )
      .then((response) => {
        const allCards = response.data;
        setCardsByBoardId({
          ...cardsByBoardId,
          [modifiedBoard.board_id]: allCards,
        });
      });

    setBoard(modifiedBoard);
  };

  //   CardForm.js State and Event Handlers
  const [cardFormFields, setCardFormField] = useState({ message: "" });
  const [cardFormIsValid, setCardFormIsValid] = useState(true);

  const addCardInstance = (newCard) => {
    const newCardsByBoardId = { ...cardsByBoardId };

    axios
      .post("https://backend-awesome-inspir-board.herokuapp.com/cards", [
        {
          message: newCard.message,
          board_id: board.board_id,
        },
      ])

      .then((response) => {
        if (!newCardsByBoardId[board.board_id]) {
          newCardsByBoardId[board.board_id] = [];
        }

        newCardsByBoardId[board.board_id].push({
          card_id: response.data.id,
          message: newCard.message,
          likes_count: 0,
        });
        setCardsByBoardId(newCardsByBoardId);
      });
  };

  // onCardChange will ensure that the message is visible
  const onCardChange = (event) => {
    setCardFormField({ ...cardFormFields, message: event.target.value });
  };

  // onCardFormSubmit will ensure a new Card instance is created
  const onCardFormSubmit = (event) => {
    event.preventDefault();

    if (
      cardFormFields.message.length === 0 ||
      cardFormFields.message.length > 40
    ) {
      setCardFormField({ message: "" });

      setCardFormIsValid(false);
      return;
    }

    addCardInstance({
      message: cardFormFields.message,
    });

    setCardFormField({ message: "" });

    setCardFormIsValid(true);
  };

  // Card.js Event Handlers
  const deleteCard = (card) => {
    const cardsByBoardIdDuplicate = { ...cardsByBoardId };
    axios
      .delete(
        `https://backend-awesome-inspir-board.herokuapp.com/cards/${card.card_id}`
      )
      .then(() => {
        let filteredCardsByBoardId = cardsByBoardIdDuplicate[
          board.board_id
        ].filter((cardToDelete) => {
          return cardToDelete.card_id !== card.card_id;
        });
        cardsByBoardIdDuplicate[board.board_id] = filteredCardsByBoardId;
        setCardsByBoardId(cardsByBoardIdDuplicate);
      });
  };

  // BACK-END CONNECTION

  useEffect(() => {
    axios
      .get(
        "https://backend-awesome-inspir-board.herokuapp.com/boards/allboards"
      )
      .then((response) => {
        console.log("response:", response);
        console.log("response data:", response.data);
        setBoardData(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
        console.log("error response:", error.response);
      });
  }, []);

  const onSubmitBoardDataHandler = (enteredBoardData) => {
    console.log(enteredBoardData);
    // const axios = require("axios");

    axios
      .post("https://backend-awesome-inspir-board.herokuapp.com/boards", [
        {
          title: enteredBoardData.title,
          owner: enteredBoardData.author,
        },
      ])
      .then((response) => {
        console.log("response:", response);
        console.log("response data:", response.data);
        setBoardData([...boardData, response.data]);
      })
      .catch((error) => {
        console.log("error:", error);
        console.log("error response:", error.response);
      })
      // finally always runs
      .finally(() => {
        console.log("finally done!");
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspo Board</h1>
      </header>
      <main className="container ">
        <div>
          <div className="row">
            <div className="center col-sm">
              <SelectBoard boardData={boardData} onSelectBoard={updateBoard} />
            </div>
            <div className="center boardBtn col-sm">
              <BoardForm onSubmitBoard={onSubmitBoardDataHandler} />
            </div>
            <div className="center col-sm">
              <CardForm
                value={cardFormFields}
                onCardChange={onCardChange}
                onSubmit={onCardFormSubmit}
                cardFormIsValid={cardFormIsValid}
              />
            </div>
          </div>
          <div>
            {board ? (
              <CardContainer
                board={board}
                cardsByBoardId={cardsByBoardId}
                increaseLikes={increaseLikes}
                deleteCard={deleteCard}
              />
            ) : undefined}
          </div>
        </div>
      </main>
    </div>
  );
}
// create a componet to display all cards

export default App;
