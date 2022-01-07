import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

import Board from './components/Board';
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import axios from 'axios';
import * as ada from './ada';


const App = () => {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [board_id, setBoard_ID] = useState('');
  const [title, setTitle] = useState('');
  const [showBoardForm, setShowBoardForm] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);
  const [showCardList, setShowCardList] = useState(false);


  const [renderedContent, setRenderedContent] = useState('');

  const getCards = async (board_id) => {
    axios.get(ada.api_url + '/boards/' + board_id + '/cards')
    .then(response => {
        console.log('setting Cards to:' + JSON.stringify(response.data))
        setCards(response.data);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })

  }
  const showCardListFunction = () => {
 


  }
  const showBoardFormFunction = () =>{
    setShowBoardForm(true);

    setRenderedContent(
      <NewBoardForm createNewBoard={createNewBoard}/>
    )
  }

  const createNewBoard = (mytitle, myowner) => {
    console.log('in createNewBoard');

    const postData = {
      title: mytitle,
      owner: myowner,
    };
    console.log(JSON.stringify(postData))
    //now use axios to post
    axios.post(ada.api_url + '/boards', postData) 
    .then(response => {
      console.log(response)
      //now set rendered content back to blank or a thank you or something
      setRenderedContent(
        <div>Thank you, board saved.</div>
      )       
    })
    .catch(function (error) {
        console.log(error);
    })
  }

  const showCardFormFunction = (board_id) =>{
    setShowCardForm(true);
    setRenderedContent(
      <NewCardForm postNewCard={createNewCard} board_id={board_id}/>
    )
  }

  const createNewCard = (message, board_id) => {
    console.log('in createNewCard, message: ' + message + ',  board_id:' + board_id);

    const postData = {
      message: message,
      likes_count: 1,
    };
    console.log(JSON.stringify(postData))
    console.log('sending to: ' + ada.api_url + '/boards/' + board_id + '/cards');
    //now use axios to post
    axios.post(ada.api_url + '/boards/' + board_id + '/cards', postData) 
    .then(response => {
      console.log(response)
      //now set rendered content back to blank or a thank you or something
      setRenderedContent(
        <div>Thank you, card saved.</div>
      )       
    })
    .catch(function (error) {
        console.log(error);
    })
  }

  const deleteBoardFunction = () => {
    console.log('in deleteBoardFuction');
    axios.delete(ada.api_url + '/boards/' + board_id)
    .then(response => {
        console.log('response');
    })   
}

  const likeCard=(card_id)=>{
    console.log('in likeCard');
    axios.put(ada.api_url + '/cards/' + card_id + '/like')
    .then(response => {
      //do something here
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })    
  }

  const deleteCard=(card_id)=>{
    console.log('in deleteCard');
    axios.delete(ada.api_url + '/cards/' + card_id)
    .then(response => {
      //do something here
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })     
  }  

  const selectBoardFunction=async(board_obj)=>{
    console.log('selectBoardFunction, obj is:' + JSON.stringify(board_obj));
    console.log(board_obj.board_id);
    setBoard_ID(board_obj.board_id);
    setTitle(board_obj.title);


    if (board_obj.board_id !== ''){
      console.log('board_id is not null, it is:' + board_obj.board_id + ' and the title is: ' + board_obj.title);      
      await getCards(board_obj.board_id)
    
      .then( function(){
        setRenderedContent(
          <Board 
              board={board_obj} 
              onClickCallbackLikes={likeCard}
              onClickCallbackDeleteCard={deleteCard}
              onClickCallbackNewCard={showCardFormFunction}
              onClickCallbackDeleteBoard={deleteBoardFunction}  
              showCardListFunction={showCardListFunction}
              Cards={cards}/>
        )
      })


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
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  },[])
  
  return (
      <div className="row">
        <div className="col-1 navigation-col">
          {/* Navigation */}
          <nav>
              <div className="navhead" key="boardsDiv">Boards</div>
                  <ul id="boardUnorderedList" key="boardUnorderedList">
                  <BoardList boards={boards}  onClickCallback={selectBoardFunction}/>
                  </ul>


              <div key="1">
                <button key="2" onClick={showBoardFormFunction}>Create A Board</button>
              </div>
          </nav>
        </div>
        <div className="col-11 container" key="content">
          {renderedContent}
        </div>
      </div>
  );
}

export default App;
