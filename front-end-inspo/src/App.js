import "./App.css";
import DropdownItem from "./components/DropdownItem";
import Sticky from "./components/Sticky";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

// const axios = require('axios');

function App() {
  const [dropDownList, setDropDownList] = useState([""]);
  const [currentBoard, setCurrentBoard] = useState({
    name: "",
    id: null,
  });
  const [currentStickies, setCurrentStickies] = useState([]);
  const URL = "https://inspo-board-memk-back-end.herokuapp.com/board";
  // const URL = "http://localhost:5000/board";
  // const URL = "http://localhost:5001/board";

  useEffect(() => {
    createDropdown();
  }, []);

  const createStickies = (board_id) => {
    axios
      .get(`${URL}/${board_id}`)
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

  const onDelete = (boardID, stickyID) => {
    // make an API call to DELETE a sticky when clicked
    axios
      .delete(`${URL}/${boardID}/${stickyID}`)
      .then(() => {
        createStickies(boardID);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const onLike = (boardID, stickyID) => {
    // make an API call to PATCH sticky -- adds 1 like when clicked
    axios
      .patch(`${URL}/${boardID}/${stickyID}`)
      .then(() => {
        createStickies(boardID);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const createDropdown = () => {
    axios
      .get(`${URL}`)
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
  };

  const createSticky = (event) => {
    event.preventDefault();
    const stickyInput = document.querySelector("#new-sticky");
    var request_body = {
      text: stickyInput.value,
    };
    stickyInput.value = "";
    axios
      .post(`${URL}/${currentBoard.id}`, request_body)
      .then(() => {
        createStickies(currentBoard.id);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const makeNewBoard = (event) => {
    event.preventDefault();
    const boardName = document.querySelector(".board-name");
    var request_body = {
      name: boardName.value,
    };

    axios
      .post(`${URL}`, request_body)
      .then((response) => {
        setCurrentBoard({
          name: boardName.value,
          id: response.data.id,
        });
        boardName.value = "";
        axios.get(`${URL}`).then((response) => {
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
          ).catch((error) => {
            console.log(error.message);
          });
        });
        createStickies(response.data.id);
      })
      .catch((error) => {
        console.log(error.message);
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
            <form onSubmit={makeNewBoard}>
              <input type="text" maxLength="22" className="board-name" />
              <input type="submit" className="board-button" />
            </form>
          </div>

          <div className="select-board">
            Select an existing Board:
            <form>
              <label for="boards"></label>
              <select id="board-name" name="boards" onChange={onBoardClick}>
                {/* generate board dropdown items */}
                {dropDownList}
              </select>
            </form>
          </div>
        </div>
        <div className="sticky-submit-container">
          Submit a new sticky:
          <form id="new-sticky-form" onSubmit={createSticky}>
            <input id="new-sticky" contentEditable="true" type="text" />
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

// Adding a comment
