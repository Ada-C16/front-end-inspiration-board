import axios from "axios";
import React, { useState } from "react";
import "./SidePanel";
import { MdDeleteForever } from "react-icons/md";
import { FcLike } from "react-icons/fc";

const Card = ({ cardId, message, likesCount }) => {
  let [likes, setLikes] = useState(likesCount);

  const onCardLike = (event) => {
    axios
      .patch(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
      .then((response) => {
        setLikes((likes += 1));
        const likesNumber = document.querySelector(`#likesDisplay${cardId}`);
        likesNumber.textContent = `Likes:${likes}`;
      })
      .catch((error) => console.log(error));
  };

  const onCardDelete = (event) => {
    console.log(cardId);
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
      .then((response) => {
        console.log(response);
        const deletedCard = document.querySelector(`[name='Card${cardId}']`);
        console.log(deletedCard);
        deletedCard.remove();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="card-main" id={cardId} name={`Card${cardId}`}>
      <span className="card-text">{message}</span>

      <div className="card-footer">
        <FcLike
          className="like-icon"
          size="1.3em"
          onClick={() => onCardLike()}
        />
        <small id={`likesDisplay${cardId}`}>Likes: {likes}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => onCardDelete()}
        />
      </div>
    </div>
  );
};

export default Card;
