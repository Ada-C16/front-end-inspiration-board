import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

const Display = (props) => {

  const [cards, setCards] = useState([]);
  const [cardsComponents, setCardsComponents] = useState([]);

  useEffect(() => {
    setCards(props.cards);
  }, [props])

  // const createCardComponents = (cards) => {
  //   //loop through
  //   const cardComponentList = cards.map((card) => {
  //     return (
  //       <div className = "card-view">
  //         <div>{card.message}</div>
  //           <div className="card-buttons" id={card.id}>
  //           <p>{card.likes_count}</p>
  //           <button className="like" onClick={likeCard(card.id)}>+1</button> 
  //          <button className="delete" onClick={deleteCard(card.id)}>delete</button>
  //         </div>
  //       </div>
  //     )
  //   })
  //   setCardsComponents(cardComponentList);
  // }

  // func to convert cards into cardComponents manually 
  // likeCard which is in the manual card creation
  // same for deleteCard


  useEffect(() => {
    const likeCard = (id) => {
      // loop through cards, make modified version
      // setCards()
      axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}/like`)
      .then(() => {
        const newCards = cards.map((card) => {
          if (card.id === id) {
            card.likes_count += 1
          }
          return card;
        })
        setCards(newCards);
      })
      .catch(()=> setCards([]))
    };
  
    const deleteCard = (id) => {
      // loop through cards, remove the one, 
      // setCards
      axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}`)
      .then(()=> {
        const newCards = [];
        cards.forEach((card) => {
          if (card.id !== id) {
            newCards.push(card);
          }
        })
        setCards(newCards);
      })
    };

    if (cards) {
      const cardComponentList = cards.map((card) => {
      return (
        <div className = "card-view" key={card.id}>
          <div>{card.message}</div>
            <div className="card-buttons" id={card.id}>
            <p>{card.likes_count}</p>
            <button className="like" onClick={likeCard(card.id)}>+1</button> 
           <button className="delete" onClick={deleteCard(card.id)}>delete</button>
          </div>
        </div>
      )
    })
    setCardsComponents(cardComponentList);   
    }
  }, 
    [cards]);

  return (
    <div className= "display-component">
      <h2>
        "{props.title}" by {props.owner}
      </h2>
      <div className="cards-display">{cardsComponents}</div>
    </div>
  );
};

export default Display;
