import React, { useState, useEffect } from "react";
import axios from "axios";

const Cards = (props) => {
  // useState for likes count
  // likes post request
  // method for delete on click
  // method for like on click 
  // const [likesCount, setLikesCount] = useState(props.likes_count)
  


  return (
    <div>
      <div>{props.message}message</div>
      <div className="card-buttons" id={props.id}>
        <p>#{props.likesCount}</p>
        <button className="like" onClick={props.likeCard()}>like +1</button>
        <button className="delete" onClick={props.deleteCard()}>delete card</button>
      </div>
    </div>
  );
};

export default Cards;
