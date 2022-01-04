import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import "./Card.css";

const Card = (props) => {
  const card = props.singleCard;
  const deleteCard = props.deleteCardCallback;

  const [cardLikeCount, setCardLikeCount] = useState(card.likes_count);

  const likeCard = (card) => {
    let likeCardsEndpoint =
      "https://team-lovelace-api.herokuapp.com/cards/" + card.card_id+ "/like";
    
    axios
      .put(likeCardsEndpoint)
      .then((response) => {
        setCardLikeCount(response.data.new_like_count);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="cards bg-info text-center">
        <p className="card-content">{card.message}</p>
        <p className="card-content">Likes: {cardLikeCount}</p> 
        <button className="card-content" cardId={card.card_id} onClick={() => likeCard(card)}>Like</button> 
        <button className="card-content" onClick={() => deleteCard(card)}>Delete</button>
      </div>
  );
  }
export default Card;

// // Card.propTypes = {
// //   card_id: PropTypes.number.isRequired,
// //   message: PropTypes.string.isRequired,
// //   likes_count: PropTypes.number.isRequired,
// //   board_id: PropTypes.number.isRequired,
// //   likeCard: PropTypes.func.isRequired,
// //   deleteCard: PropTypes.func.isRequired,
// // };



// import React,{ Component } from 'react';
// import "./Card.css";

// class Card extends Component{
//   state = {
//     message: "",
//     likes: 0
//   }

//   addLike = () => {
//     let newCount = this.state.likes + 1;
//     this.setState({
//       likes: newCount
//     });
//     let likeCardsEndpoint =
//       "https://team-lovelace-api.herokuapp.com/cards/" + this.id + "/like";
    
//     axios
//       .put(likeCardsEndpoint)
//       .then((response) => {
//         //setCardLikeCount(response.data.new_like_count);
//         console.log(response);
//       })
//       .catch((error) => console.log(error));
//   };

//   render(){
//     return (
//           <div className="cards bg-info text-center" key={Card.id}>
//               <p className="card-content">{this.message}</p>
//               <p className="card-content">Likes: {this.state.likes}</p>
//               <button className="card-content" onClick={this.addLike} id={this.props.cardId}>Like</button>
//               <button className="card-content" onClick={this.props.deleteCardCallback}>Delete</button>
//             </div>
//         );
//   }
// }

// export default Card;
