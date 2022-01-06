import "./App.css";
import Boardz from "./components/Boardz";
// import Card from "./components/Card";
import CardDisplay from "./components/CardDisplay";
import NewCardForm from "./components/NewCardForm";
import NewBoardForm from "./components/NewBoardForm";
import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";
import Congrats from "./components/Congrats";


function App() {
  // const boardURL = `${process.env.REACT_APP_BACKEND_URL}/board`;
  const boardURL = "http://localhost:5000/board"
  console.log("boardURL is:", boardURL);

  // This is a piece of state. It's a list of all the board objects in our api database
  const [boardList, setBoardList] = useState([]);

  // This is a piece of state. It's a list of all card objects for a specific board.
  const [cardList, setCardList] = useState([]);

  // const [currentCard, setCurrentCard] = useState([]);

  const [currentBoard, setCurrentBoard] = useState("");


  // This function deletes a card when it's delete button is clicked
  const deleteCard = (cardID, currentBoard) => {
    // console.log('we are in deleteCard!');
    if (cardID) {
      axios
        .delete(`${boardURL}/${currentBoard.id}/cards/${cardID}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    }
  }

  // This function POSTs the data in form to ther heroku database. and updates the state boardList
  const addNewBoard = (newBoard) => {
    axios
      .post(boardURL, newBoard)
      .then((response) => {
        console.log("a new board has been posted");
        // console.log(response.data);
        const boards = [...boardList];
        boards.push(response.data);
        setBoardList(boards);
      })
      .catch((err) => console.log(err));
  };


  //This function POSTs a new card and its message to our db. Also updates the state cardList
  //It updates state so that the new card immediately displays.
  const addNewCard = (newCard) => {
    if (currentBoard) {
      console.log('We are in addNewCard. newCard:', newCard);
      // const cards = [...cardList];
      // cards.push({
      //   board_id: currentBoard.id,
      //   message: newCard.message
      // });
      // setCardList(cards);
      // console.log('new card added to state!');
      axios
        .post(`${boardURL}/${currentBoard.id}`, newCard)
        .then((response) => {
          console.log("a new card has been posted");
          console.log(response.data);
          const cards = [...cardList];
          cards.push(response.data);
          setCardList(cards);
        })
        .catch((err) => console.log(err));
    }
    //should we throw a pop-up error if they try to post a card
    //before they select a board?
  };
  
  // GET all the boards
  useEffect(() => {
    axios
      .get(boardURL)
      .then((response) => {
        setBoardList([...response.data]);
      })
      .catch((err) => console.log(err));
  }, []); 

  ///////////////

  // This function should update the currentBoard state. It is invoked when a user clicks on a board. It should be passed as a prop to Boardz.js, then down to Board.js
  // const updateCurrentBoard = (id) => {
  const updateCurrentBoard = (boardInfo) => {
    // setCurrentBoard(boardInfo.title);
    setCurrentBoard({title: boardInfo.title,
      id: boardInfo.id,
      owner: boardInfo.owner
    });
    // console.log(boardInfo)
    // console.log(currentBoard)
    axios
      .get(`${boardURL}/${boardInfo.id}/cards`)
      .then((response) => {
        setCardList([...response.data]);
      })
      .catch((err) => console.log(err));

    console.log(`the board has been updated to ${boardInfo.id}`);
    // call function to get cards associated with current board
  };


  // This function takes in a list of board objects. Iterates over each object, makes a <Board /> and gives it an object {name:'', owner: ''} and updateCurrentBoard() function as props
  // const createBoardMenu = (boardList) => {};

  //This function makes a DELETE http request. It deletes one board by id
  const deleteABoard = (id) => {
    axios
      .delete(boardURL + `/${id}`)
      .then((response) => {
        console.log(response.data);
        // setBoardList([...response.data]);
      })
      .catch((err) => console.log(err));
  };

  //This function iterates thru boardList and deletes every object from the herouku database by calling deleteABoard(). It is passed to Boarz as a prop and invoked in Boardz when a user clicks on the 'clear all boards' button.
  const deleteAllBoards = () => {
    boardList.forEach((element) => {
      deleteABoard(element.id);
    });
    setBoardList([])
    setCurrentBoard("")
    setCardList([])
  };


  //This function makes a PATCH http request. It updates card.likes_count by 1.
  const addLike = (cardID) => {
    axios
      .patch(`${boardURL}/${currentBoard.id}/cards/${cardID}`)
      .then((response) => {
        console.log("Like added.")
        const cards = [...cardList]
        for (let card of cards) {
          if (card.card_id === cardID) {
            card.likes_count = Number(card.likes_count) + 1
          }
        }
        setCardList(cards)
      })
      .catch((err) => console.log(err));
  }

  const sortAllCards = () => {
    let cardListCopy = [...cardList]
    // let sortedList = []
    // cardListCopy.sort((a, b) => Number(a.likes_count) > Number(b.likes_count) ? 1 : -1)
    // Cabebe's experimenting with sort
    cardListCopy.sort((a, b) => {return Number(a.likes_count) - Number(b.likes_count);})
    console.log(cardListCopy)
    setCardList(cardListCopy)
    // cardListCopy.map((item, i) => 
    //   console.log("hi")
    
    // )

  }

  return (
    <section>
      <header></header>
      <div className="grid-layout-container">
        <section className="site-title-block grid-block">
          <p className="site-title">InspoBoard</p>
        </section>
        <Boardz
          updateCurrentBoardCallback={updateCurrentBoard}
          deleteAllBoardsCallback={deleteAllBoards}
          boardList={boardList}
        />
        <NewCardForm 
          addNewCardCallback={addNewCard}
          cardList = {cardList}
          currentBoard={currentBoard}
        />
        <NewBoardForm addNewBoardCallback={addNewBoard} />
        <CardDisplay cardList={cardList}
          currentBoard={currentBoard}
          deleteCardCallback={deleteCard}
          setCardList={setCardList}
          addLikeCallback={addLike}
          sortCardsCallback={sortAllCards} >
          
          </CardDisplay>

      </div>
    </section>
  );
}

export default App;
