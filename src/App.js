import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Boards from './components/Boards.js';
import BoardForm from './components/BoardForm';
import CardForm from './components/CardForm';
import Cards from './components/Cards';


const App = () => {

  const BOARDS = [
    {title: "board1",
    owner: "Sophia",
    board_id: 1},
    
    {title: "board2",
    owner: "Jessica",
    board_id: 2}, 
    
    {title: "board3",
    owner: "Makhabat",
    board_id: 3}, 
    
    {title: "board4",
    owner: "Alie",
    board_id: 4}
  ]
  const [boards, setBoards] = useState(BOARDS);
  // useEffect(async () => {
  //   const result = await axios(
  //     'https://hn.algolia.com/api/v1/search?query=redux',
  //   );

  //   setData(result.data);
  // });
  // useEffect(async () => {
  //   const res = await axios.get(`{process.env.REACT_APP_GET_ALL_BOARDS_URL}`);
  //   setBoards(res.data)
  // }, []);

  useEffect(async () => {
    const res = await axios('https://kids-in-covid-board.herokuapp.com/boards');
    setBoards(res.data)
  }, []);
  

  const CARDS = [
    {
      message: 'Message1',
      card_id: 1,
      board_id: 4,
      like_count: 2
    },
    {
      message: 'Message2',
      card_id: 2,
      board_id: 4,
      like_count: 30
    },
    {
      message: 'Message3',
      card_id: 3,
      board_id: 1,
      like_count: 0
    }
  ]
  
  const [cards, setCards] = useState(CARDS);
  useEffect(async () => {
    const res = await axios('https://kids-in-covid-board.herokuapp.com/cards');
    setCards(res.data)
  }, []);
  
  return (
    <div className="App">
      <Boards boards={boards}/>
      <BoardForm/>
      <Cards cards={cards}/>
      <CardForm/>
    </div>
  );
}



export default App;
