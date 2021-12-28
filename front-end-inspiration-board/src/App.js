import './App.css';
import Boardz from './components/Boardz';
import CardDisplay from './components/CardDisplay'; 
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';
import {useState } from 'react';
import React, { useEffect } from "react";
import axios from "axios";

function App() {
  const boardURL = "https://winspo-board.herokuapp.com/board";

  // This is a piece of state. It's a list of all the board objects in our api database
  const [boardList, setBoardList] = useState([]);

  // This is a piece of state. It's a list of all card objects for a specific board.
  const [cardList, setCardList] = useState([])

  
  // This function POSTs the data in form to ther heroku database. and updates the state boardList
  const addNewBoard = newBoard => {
    axios
    .post(
      boardURL, 
      newBoard
    )
    .then((response) => {
      console.log("a new board has been posted");
      // console.log(response.data);
      const boards = [...boardList];
      boards.push(response.data.board);
      setBoardList(boards);
    })
    .catch((err) => console.log(err));
  }
  console.log(boardList);

  //This function POSTs a new card and its message to our db. Also updates the state cardList
  //It updates state so that the new card immediately displays. 
  const addNewCard = newCard => {
    axios
    .post(
      //big question mark here
      //how to we post to a url with the board ID as a variable?
      //maybe need separate function to do the following:
      //fetch board_ID by current board name
      //create new string with that number
      //pass that into this on next line

      //maybe first, we need a piece of state that holds the current board on display
      //we have that, vange made it
      //so maybe i need a way to fetch ID from that piece of state
      "https://winspo-board.herokuapp.com/board",
      newCard
    )
    .then((response) => {
      console.log("a new card has been posted");
      const cards = [...cardList];
      cardList.push(response.data.card);
      setCardList(cards);
    })
    .catch((err) => console.log(err));
  }

  // GET all the boards
  useEffect(() => {
    axios
    .get(
      "https://winspo-board.herokuapp.com/board"  )
      .then((response) => {
        console.log(response);
        setBoardList([...response.data]);
      })
      .catch((err) => console.log(err));
    }, []);
  


  ///////////////

    // This piece of state represents the currently selected board -vange
    const [currentBoard, setCurrentBoard] = useState({
      title: '',
      owner:''
    });

    // This function should update the currentBoard state. It is invoked when a user clicks on a board. It should be passed as a prop to Boardz.js, then down to Board.js
    const updateCurrentBoard = () => {
      //use setCurrentBoard here!
      console.log('the board has been updated')
      // call function to get cards associated with current board
    };

    // This function takes in a list of board objects. Iterates over each object, makes a <Board /> and gives it an object {name:'', owner: ''} and updateCurrentBoard() function as props
    const createBoardMenu = (boardList) => {

    }
  
    //This function makes a DELETE http request. It deletes one board by id
    const deleteABoard = (id) => {
      axios
        .delete(
          boardURL+`/${id}`)
        .then((response) => {
          console.log(response.data);
          // setBoardList([...response.data]);
        })
        .catch((err) => console.log(err));
    }

    //This function iterates thru boardList and deletes every object from the herouku database by calling deleteABoard(). It is passed to Boarz as a prop and invoked in Boardz when a user clicks on the 'clear all boards' button.
    const deleteAllBoards = () => {
      boardList.forEach(element => {
        deleteABoard(element.id);
      });
    }

  return (
    <section>
      <header>
      </header>
      <div className='grid-layout-container'>
        <section className='site-title-block grid-block'>
          <p className='site-title'>InspoBoard</p>
        </section>
        <Boardz 
          updateCurrentBoardCallback={updateCurrentBoard}
          deleteAllBoardsCallback={deleteAllBoards}
        />
        <NewCardForm addNewCardCallback={addNewCard}/>
        <NewBoardForm addNewBoardCallback={addNewBoard} />
        <CardDisplay />
      </div>
    </section>
  );
}

export default App;
