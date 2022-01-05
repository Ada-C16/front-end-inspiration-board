import "./App.css";
import DropdownItem from "./components/DropdownItem";
import Sticky from "./components/Sticky";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

// const axios = require('axios');

// We need to create a function that makes an API call to get all the boards from the database to populate the dropdown
// We need to create a function that makes an API call to get all the stickies from the database for specific selected board
// Create a function that generates a sticky component for each sticky in the chosen board database

function App() {
  const [dropDownList, setDropDownList] = useState([""]);
  const [currentBoard, setCurrentBoard] = useState({
    name: "State hasn't been set yet",
    id: null,
  });
  const [currentStickies, setCurrentStickies] = useState([]);

  useEffect(() => {
    createDropdown();
    // createStickies();
  }, []);

  const stickyData = {
    stickies: [
      {
        text: "This is a sticky",
        timestamp: "2019-01-01",
        id: "1",
        likes: 0,
      },
      {
        text: "This is another sticky",
        timestamp: "2019-01-01",
        id: "2",
        likes: 2,
      },
      {
        text: "This is a third sticky",
        timestamp: "2019-01-01",
        id: "3",
        likes: 3,
      },
      {
        text: "This is a fourth sticky",
        timestamp: "2019-01-01",
        id: "4",
        likes: 4,
      },
    ],
  };

  const createStickies = (board_id) => {
    axios
      .get(`http://localhost:5001/board/${board_id}`)
      .then((response) => {
        var stickies = response.data.map((sticky) => {
          return (
            <Sticky
              key={sticky.id}
              text={sticky.text}
              date={sticky.date}
              id={sticky.id}
              boardID={board_id}
              num_likes={sticky.num_likes}
              onDelete={onDelete}
              onLike={onLike}
            />
          );
        });
        setCurrentStickies(stickies);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const onDelete = (stickyID) => {
    // make an API call to DELETE a sticky when clicked
  };

  const onLike = (boardID, stickyID) => {
    // make an API call to PATCH sticky -- adds OR subtracts 1 like when clicked -- I don't think we have a mechanism for subtracting likes right now
    console.log('I print when clicked')
    axios
      .patch(`http://localhost:5001/board/${boardID}/${stickyID}`)
      .then(() => {
        createStickies(boardID);
      })
      .catch((error)=>{
        console.log(error.message)
      });

  };

  const createDropdown = () => {
    axios
      .get("http://localhost:5001/board")
      .then((response) => {
        setDropDownList(
          response.data["boards"].map((board) => {
            // added boardID as a prop - MB
            return (
              <DropdownItem
                key={board.id}
                boardId={board.id}
                name={board.name}
              />
            );
          })
        );
        setCurrentBoard({
          name: document.querySelector("[name=boards]").value,
          // Sets the id to the current id of the selected option
          id: document.querySelector("[name=boards]").options[
            document.querySelector("[name=boards]").selectedIndex
          ].id,
        });
        createStickies(response.data.boards[0].id);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // removed board_id from parameters -MB
  const onBoardClick = () => {
    var boardId =
      document.querySelector("[name=boards]").options[
        document.querySelector("[name=boards]").selectedIndex
      ].id;
    setCurrentBoard({
      name: document.querySelector("[name=boards]").value,
      id: boardId,
    });
    createStickies(boardId);
    // call getStickies (we need getStickies bc we need to be able to generate the first set of stickies)
  };

  const getStickies = (boardID) => {
    // grab the selected board from the dropdown
    // we are making a GET request to the API to get all stickies for specific board
    // by feeding the data from API into createStickies()
  };

  const makeNewBoard = () => {
    // gets the board name from the form
    const boardButton = document.getElementById("board-button");
    boardButton.addEventListener("click", (event) => {
      event.preventDefault();
      const boardName = document.getElementById("board-name").value;
      // make an API call to POST a new board with grabbed board name
      // {'name': boardName};
      // wait for successful API POST, call createDropdown, and automatically redirect to new board "page" (change the title, call getStickies)
    });
  };

  return (
    <div className="main-container">
      <section className="sidebar-container">
        <div className="sidebar-header">
          <h1 className="inspo-header">{currentBoard.name}</h1>
        </div>
        <div className="board-container">
          <div className="submit-board">
            Submit a new board:
            <form>
              <input type="text" className="board-name" />
              <input type="submit" className="board-button" />
            </form>
          </div>

          <div className="select-board">
            Select an existing Board:
            <form>
              <label for="boards"></label>
              <select name="boards" onChange={onBoardClick}>
                {/* generate board dropdown items */}
                {dropDownList}
              </select>
            </form>
          </div>
        </div>
        <div className="sticky-submit-container">
          Submit a new sticky:
          <form>
            <input type="text" />
            <input type="submit" />
          </form>
        </div>
      </section>

      {/* this essentially is the board displayed */}
      <section className="stickies-container">
        <div className="stickies-subcontainer">
          {/* put sticky components here */}
          {currentStickies}
        </div>
      </section>
    </div>
  );
}

export default App;
