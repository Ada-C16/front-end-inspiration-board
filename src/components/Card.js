import React from "react";

/*const Card = ({ message, numLikes, like, deleteCard }) => {
    
  return (
    <div>
      <p>{message}</p>
      <p>{numLikes}</p>
      <button onClick={like}>+1</button>
      <button onClick={deleteCard}>Delete</button>
    </div>
  ); */

const Card = () => {
  
  function drag () {
    ( "#draggable" ).draggable();
  };
  
  return (
    <section drag ={drag}>
      <div className="wrapper"></div>
      <div className="draggable">
        <div className="title">Drag me from here</div>
        <textarea className="sticky-note"></textarea>
      </div>
    </section>
  )
};


export default Card;
