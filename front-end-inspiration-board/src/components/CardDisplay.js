import React, {useEffect} from "react";
// import {useState} from "react";
// import axios from "axios";
import Card from "./Card";
import SortByLikes from "./SortByLikes"
import "./CardDisplay.css";


//when is this called?
const CardDisplay = (props) => {
  // notifies console that cardList state has changed
  // useEffect(()=> {
  //   console.log('The cardList has been updated!', props.cardList);
  // }, [props.cardList])

  const updateCardDisplay =(cardList, currentBoard)=> {
    const cardComponents = [];
    if (props.cardList) {
      for (let card of props.cardList) {
        //the key is just something that react needs when it renders elements in a loop
        //dont use it elsewhere
        //just for react to distinguish which card is which
        cardComponents.push(
          <Card 
          key={card.card_id}
          id={card.card_id}
          cardMessage={card.message}
          cardLikes={card.likes_count}
          currentBoard={props.currentBoard}
          cardList={props.cardList}
          deleteCardCallback={props.deleteCardCallback}
          setCardList={props.setCardList}
          addLikeCallback={props.addLikeCallback}
          updateCardDisplayCallback={updateCardDisplay}
          // setCurrentCardCallback = {props.setCurrentCard}
          />
          );
        } 
    return cardComponents;
    }
  }
  
  const cardComponents = updateCardDisplay(props.cardList, props.currentBoard);

  let cardDisplayHeader = '↙️ select a board!';

  if (props.currentBoard){
    cardDisplayHeader = `${props.currentBoard.title} by ${props.currentBoard.owner}`;
  };

  if(!props.currentBoard) {
    return (
      <section className="card-display-block grid-block">
        <h1>
            {cardDisplayHeader}
            {/* {props.currentBoard.title} by {props.currentBoard.owner} */}
        </h1>
      </section>
    );
  }

  return (
    <section className="card-display-block grid-block">
      <h1>
          {cardDisplayHeader}
          {/* {props.currentBoard.title} by {props.currentBoard.owner} */}
      </h1>
      <SortByLikes 
        cardList={props.cardList}
        setCardList={props.setCardList}
        sortCardsCallback={props.sortCardsCallback}>
      </SortByLikes>
      {/* {console.log(props.currentBoard)} */}
      <section className="cards-container">
        {cardComponents}
      </section>
    </section>
  );
};

export default CardDisplay;
