import React, { useState } from "react";
import Card from "./Card";
import "./CardContainer.css";

// Every time a message is submitted via CardForm.js, an instance of Card populates CardContainer.

const CardContainer = (props) => {
  return (
    <>
      <h2 className="cardTitle">{props.board?.title} Cards</h2>
      <div className="cardContainer">
        {props.cardsByBoardId[props.board?.board_id]?.map((card) => {
          return (
            <div className="cardContainer-child">
              <Card
                key={card.card_id}
                increaseLikes={props.increaseLikes}
                card={card}
                deleteCard={props.deleteCard}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CardContainer;
