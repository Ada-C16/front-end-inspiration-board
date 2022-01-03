import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

// import "./Card.css";

const Card = (props) => {
  const card = props.singleCard;
  const deleteCard = props.deleteCardCallback;
  
  const [cardLikeCount, setCardLikeCount] = useState(card.likes_count);
  setCardLikeCount(0);

  const likeCard = (card) => {
    let likeCardsEndpoint =
      "https://team-lovelace-api.herokuapp.com/cards/" + card.card_id + "/like";
    let new_like_count = this.state.likes_count + 1;
    this.setState({
      likes_count: new_like_count
    })
    

    axios
      .put(likeCardsEndpoint)
      .then((response) => {
        setCardLikeCount(response.data.new_like_count);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h4>{card.message}</h4>
      <h5>Likes: {cardLikeCount}</h5>
      <button onClick={() => likeCard(card)}>Like</button>
      <button onClick={() => deleteCard(card)}>Delete</button>
    </div>
  );
};

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  board_id: PropTypes.number.isRequired,
  likeCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
