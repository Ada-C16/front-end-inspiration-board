import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

// import "./Card.css";

const Card = (props) => {
  const card = props.singleCard;
  const deleteCard = props.deleteCardCallback;

  const [cardLikeCount, setCardLikeCount] = useState(card.likes_count);

  const likeCard = (card) => {
    let likeCardsEndpoint =
      "https://team-lovelace-api.herokuapp.com/cards/" + card.card_id + "/like";

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

// const Card = (props) => {
//   const likeCardClick = () => {
//     props.likeCard(props.cardId);
//   };

//   const deleteCardClick = () => {
//     props.deleteCard(props.cardId);
//   };

//   // returns:
//   // Card with message
//   // buttons: like and delete
//   return (
//     <body className="cardMessage">
//       <p>{props.message}</p>
//       <div>
//         <button className="cardButtons" type="button" onClick={likeCardClick}>
//           +1 or like
//         </button>
//         <button className="cardButtons" type="button" onClick={deleteCardClick}>
//           delete
//         </button>
//       </div>
//     </body>
//   );
// };

// Card.propTypes = {
//   cardId: PropTypes.number.isRequired,
//   message: PropTypes.string.isRequired,
//   likesCount: PropTypes.number.isRequired,
//   boardId: PropTypes.number.isRequired,
//   likeCard: PropTypes.func.isRequired,
//   deleteCard: PropTypes.func.isRequired,
// };

export default Card;
