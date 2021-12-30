import React, {useEffect} from "react";
// import axios from "axios";
import Card from "./Card";


//when is this called?
const CardDisplay = (props) => {
  // notifies console that cardList state has changed
  useEffect(()=> {
    console.log('The cardList has been updated!', props.cardList);
  }, [props.cardList])

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
          // updateCardDisplayCallback={updateCardDisplay}
          // setCurrentCardCallback = {props.setCurrentCard}
          />
          );
        } 
    return cardComponents;
    }
  }
  
  const cardComponents = updateCardDisplay(props.cardList, props.currentBoard);
  
  return (
    <section className="card-display-block grid-block">
      <h1>{props.currentBoard.title} by {props.currentBoard.owner}</h1>
      {/* {console.log(props.currentBoard)} */}
      {cardComponents}
    </section>
  );
};

export default CardDisplay;
