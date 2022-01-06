import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

import Board from './components/Board';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import axios from 'axios';
import * as ada from './ada';


const App = () => {
  const [boards, setBoards] = useState([]);
  const [board_id, setBoard_ID] = useState('');
  const [title, setTitle] = useState('');
  const [showBoardForm, setShowBoardForm] = useState(false);

  const [renderedContent, setRenderedContent] = useState('');
  
  const showBoardFormFunction = () =>{
    setShowBoardForm(true);
    setRenderedContent(
      <NewBoardForm createNewBoard={createNewBoard}/>
    )
  }

  const createNewBoard = (title, owner) => {
    console.log('in createNewBoard');
    //now use axios to post

    //now set rendered content back to blank or a thank you or something
    setRenderedContent(
      <div>Thank you, board saved.</div>
    ) 
  }
  const likeCard=(card_id)=>{
    console.log('in likeCard');
  }

  const selectBoardFunction=(board_obj)=>{
    console.log('selectBoardFunction, obj is:' + JSON.stringify(board_obj));
    console.log(board_obj.board_id);
    setBoard_ID(board_obj.board_id);
    setTitle(board_obj.title);


    if (board_obj.board_id !== ''){
      console.log('board_id is not null, it is:' + board_obj.board_id + ' and the title is: ' + board_obj.title);
      setRenderedContent(
        <Board board={board_obj} onClickCallback={likeCard}/>
      )
    }else{
      console.log('board_id is null');
      setRenderedContent(<div>Please choose a board...</div>);
    }  

  }


  useEffect(() => {
    console.log('in generateBoards');
  
    //Call the API and get the list of boards
    axios.get(ada.api_url + '/boards')
    .then(response => {
      setBoards(response.data)
    
    })
    .then(function (){
      // setRenderedContent(
      //   renderedContent
      // )
    
    })
    
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
  
    })
  },[])
  





 
  return (
      <div className="row">
        <div className="col-1 navigation-col">
          {/* Navigation */}
          <nav>
              <div className="navhead" key="boardsDiv">Boards</div>
                  <ul id="boardUnorderedList" key="boardUnorderedList">
                  <BoardList boards={boards} onClickCallback={selectBoardFunction}/>
                  </ul>


              <div key="1">
                <button key="2" onClick={showBoardFormFunction}>Create A Board</button>
              </div>
                
              <div className="navhead" key="navhead">Across All Boards</div>
                  <ul>
                  <li className='boardlink' id='AllMostPopular' key='AllMostPopular'><a className="navsublink" href="#">Most Popular</a></li>
                  <li className='boardlink' id='AllNewest' key='AllNewest'><a className="navsublink" href="#">Newest</a></li>         
                  </ul>


          </nav>
        </div>
        <div className="col-11 container" key="content">
          {renderedContent}
        </div>
      </div>
  );
}

export default App;
