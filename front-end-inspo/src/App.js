import './App.css';
import DropdownItem from './components/DropdownItem';
import Sticky from './components/Sticky';
import axios from 'axios';
import {useState} from 'react';
import React from 'react';


// const axios = require('axios');

// We need to create a function that makes an API call to get all the boards from the database to populate the dropdown
// We need to create a function that makes an API call to get all the stickies from the database for specific selected board
// Create a function that generates a sticky component for each sticky in the chosen board database



const stickyData = {
  "stickies": [
    {
      "text": "This is a sticky",
      "timestamp": "2019-01-01",
      "id": "1",
      "likes": 0
    },
    {
      "text": "This is another sticky",
      "timestamp": "2019-01-01",
      "id": "2",
      "likes": 2
    },
    {
      "text": "This is a third sticky",
      "timestamp": "2019-01-01",
      "id": "3",
      "likes": 3
    },
    {
      "text": "This is a fourth sticky",
      "timestamp": "2019-01-01",
      "id": "4",
      "likes": 4
    }
  ]
};

const boardData = {
  "boards": [
    {
      "name": "Board 1",
      "id": "1"
    },
    {
      "name": "Board 2",
      "id": "2"
    },
    {
      "name": "Board 3",
      "id": "3"
    }
  ]
};

const createStickies = (stickyData) => {
  return stickyData['stickies'].map(sticky => {
    return <Sticky key={sticky.id} text={sticky.text} timestamp={sticky.timestamp} id={sticky.id} likes={sticky.likes} onDelete={onDelete} onLike={onLike} />;
  });
}

const onDelete = (stickyID) => {
  // make an API call to DELETE a sticky when clicked
};

const onLike = (stickyID) => {
  // make an API call to PATCH sticky -- adds OR subtracts 1 like when clicked
};

const createDropdown = () => {
  
  axios.get('http://localhost:5001/board')

    .then((response)=>{
      console.log(response.data)
      setDropDownList(response.data['boards'].map(board => {
        return <DropdownItem key={board.id} name={board.name}/>;
      })
      )})
    .catch((error) => {console.log(error.message)});
    };

const onBoardClick = (boardID) => {
  // call getStickies (we need getStickies bc we need to be able to generate the first set of stickies)
};

const getStickies = (boardID) => {
  // grab the selected board from the dropdown
  // we are making a GET request to the API to get all stickies for specific board
  // by feeding the data from API into createStickies()
};

const makeNewBoard =  () => {
  // gets the board name from the form
  const boardButton = document.getElementById("board-button");
  boardButton.addEventListener('click', (event) => {
    event.preventDefault();
    const boardName = document.getElementById("board-name").value;
    // make an API call to POST a new board with grabbed board name
    // {'name': boardName};
    // wait for successful API POST, call createDropdown, and automatically redirect to new board "page" (change the title, call getStickies)
  });
};

function App() {
  const [dropDownList, setDropDownList] = useState(['']);

  return (
      <div className="main-container">
        <section className="sidebar-container">
          <div className="sidebar-header">
            <h1 className="inspo-header">Name of Current Board</h1>
          </div>
          <div className="board-container">
            <div className="submit-board">
            Submit a new board: 
            <form>
              <input type="text" className="board-name"/>
              <input type="submit" className="board-button"/>
              </form>
            </div>


            <div className="select-board">
            Select an existing Board: 
              <form>
                <label for="boards"></label>
                <select name="boards">
                  {/* generate board dropdown items */}
                  {createDropdown()}
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
              {createStickies(stickyData)}
          </div>
        </section>
      </div>
  );
}

export default App;
