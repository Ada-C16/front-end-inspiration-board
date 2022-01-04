import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

import Board from './components/Board';
import axios from 'axios';
import * as ada from 'ada';

function App() {

// const [cards, setCard] = useState(generateCards());
const [boards, setBoard] = useState(generateBoards());


const generateBoards=()=>{
  //Call the API and get the list of boards
  axios.get(ada.api_url + '/boards/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


  GetBoardsAPIResponse = "TEXT OF JSON RESPONSE"
  responseObject = JSON.parse(GetBoardsAPIResponse)
  
  //Now add the boards as links to the boardUnorderedList.


}
const likeCardFunction=(card_id)=>{

}

  return (
      <div className="row">
        <div className="col-1 navigation-col">
          {/* Navigation */}
          <nav>
              <div className="navhead">Boards</div>
                  <ul id="boardUnorderedList">
                  <li className='boardlink' id='Board1'><a className="navsublink" href="#">Please Wait...</a></li>
                  </ul>


              <div>
                <button>Create A Board</button>
              </div>
                
              <div className="navhead">Across All Boards</div>
                  <ul>
                  <li className='boardlink' id='AllMostPopular'><a className="navsublink" href="#">Most Popular</a></li>
                  <li className='boardlink' id='AllNewest'><a className="navsublink" href="#">Newest</a></li>         
                  </ul>


          </nav>
        </div>
        <div className="col-11 container">
          <Board board_id={board_id} onClickCallback={likeCardFunction} />
        </div>
      </div>
  );
}

export default App;
