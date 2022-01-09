import React from "react";
import PropTypes from "prop-types";
// import './Card.css'

//takes in one card and renders it and its functionalities
const Card = (props) => {
  //calls event handler in App to increment like
  const clickLikeButton = () => {
    props.onLike(props.id); //this will be in app
  };

  //calls event handler in App to delete the card
  const clickDeleteButton = () => {
    props.onDelete(props.id);
  };

  return (
    <div>
      <section>{props.message}</section>
      <button className="card-like" onClick={clickLikeButton}>
        {props.likes}💕
      </button>
      ;
      <button className="delete" onClick={clickDeleteButton}>
        delete
      </button>
    </div>
  );
  //some reference to state variable for likes
};

//create proptypes
Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  //maybe have board_id?
};

export default Card;
