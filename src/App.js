import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

import Board from './components/Board';
import BoardList from './components/BoardList';
import axios from 'axios';
import * as ada from './ada';

const generateBoards= async ()=>{
  console.log('in generateBoards');

  //Call the API and get the list of boards
  axios.get(ada.api_url + '/boards')
  .then(response => response.data)
  .then(function (responseJSON) {
    // handle success
    console.log(responseJSON);
    return responseJSON         
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed

  });

}


const App = () => {
  const [boards, setBoards] = useState(generateBoards());
  



// const [cards, setCard] = useState(generateCards());

const [board_id, setBoard_ID] = useState();


const likeCardFunction=(card_id)=>{
  console.log('likeCardFunction');
}
const selectBoardFunction=(board_id)=>{
  console.log('selectBoardFunction');
}
  return (
      <div className="row">
        <div className="col-1 navigation-col">
          {/* Navigation */}
          <nav>
              <div className="navhead">Boards</div>
                  <ul id="boardUnorderedList">
                  <BoardList boards={boards} onClickCallback={selectBoardFunction}/>
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
