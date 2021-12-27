import React, { useState, useEffect } from "react";
import axios from "axios";

const Cards = (props) => {
  // useState for likes count
  // likes post request
  // method for delete on click
  // method for like on click 
  const [likesCount, setLikesCount] = useState(props.likes_count)
  const likeCard = () => {
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/{props.id}/like`)
    .then((response) => {
      setLikesCount(likesCount+1);
    })
  }

  const deleteCard = (props) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/{props.id}`)
  }


  return (
    <div>
      <div>{props.message}message</div>
      <div className="card-buttons" id={props.id}>
        <p>#{likesCount}</p>
        <button className="like" onClick={likeCard}>like +1</button>
        <button className="delete" onClick={deleteCard}>delete card</button>
      </div>
    </div>
  );
};

export default Cards;
