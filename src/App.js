import axios from "axios";
import React, {useEffect, useState} from "react";
import Display from "./components/Display"; 
import Forms from "./components/Forms";
import "./App.css";
import train from './images/train-gif.gif'


const App = () => {
  const [currentBoard, setCurrentBoard] = useState(1);
  const [display, setDisplay] = useState(<Display id = "1" title="board" owner = "train-emoji" cards = {[]}/>);
  const [cards, setCards] = useState([]);
  const [boardInfo, setBoardInfo] = useState({title:"",owner:""});
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/1`) // what if 1 doesnt exist? catch by going to next avail num
      .then((response) => {
        setBoardInfo({title:response.data.title, owner:response.data.owner})
        setCards(response.data.cards)
      })
  }, [])

  // COMPONENTS 
  const onBoardSelect = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute('id');

    setCurrentBoard(option);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${option}`)
      .then((response) => {
        setBoardInfo({title:response.data.title, owner:response.data.owner})
        setCards(response.data.cards)
      })
  };

  useEffect(() => {
    const likeCard = (e) => {
      const id = e.target.parentNode.parentNode.getAttribute("id");
      axios
        .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}/like`)
        .then(() => {
          const newCards = cards.map((card) => {
            if (card.id === parseInt(id)) {
              card.likes_count += 1;
            }
            return card;
          });
          setCards(newCards);
        })
        .catch(() => {}); // maybe just have it superficially update the number // or do nothing
    };

    const deleteCard = (e) => {
      const id = e.target.parentNode.parentNode.getAttribute("id");
      axios
        .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}`)
        .then(() => {
          const newCards = [];
          cards.forEach((card) => {
            if (card.id !== parseInt(id)) {
              newCards.push(card);
            }
          });
          setCards(newCards); 
        });
    };

    if (cards) {
      const cardComponentList = cards.map((card) => {
        return (
          <div className="card-view" key={card.id} id={card.id}>
            <div class="card-message">{card.message}</div>
            <div className="card-buttons">
              <p class="likes-count">&#9734;{card.likes_count}</p>
              <button className="like" onClick={likeCard}>
                +1
              </button>
              <button className="delete" onClick={deleteCard}>
                delete
              </button>
            </div>
          </div>
        );
      });
      setDisplay(<Display title ={boardInfo.title} owner = {boardInfo.owner} cards = {cards} cardsComponents = {cardComponentList}/>)
    }
  }, [cards]);

  return (
    <div className="App">
      <header>
        <img src={train} alt='blue train with black lettering on teh side that reads "inspiration station"'></img>
      </header>
      <main>
        <Forms onBoardSelect = {onBoardSelect} currentBoard = {currentBoard}/>
        {display}
      </main>
    </div>
  )
};
export default App; 
