import React from "react";
import PropTypes from "prop-types";

import "./Sticky.css";

const Sticky = (props) => {
  return (
    <div className="sticky">
      <button className="sticky-delete" onClick={props.onDelete}>
        X
      </button>
      <article className="sticky-text">{props.text}</article>

      <div className="sticky-footer">
        <span className="sticky-timestamp">{props.date}</span>
        <div className="sticky-likes">
          <button className="like-button" onClick={ (event) => props.onLike(props.boardID, props.id, event)}>
            Like
          </button>
          <span className="likes-count">+ {props.num_likes}</span>
        </div>
      </div>
    </div>
  );
};



Sticky.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  boardID: PropTypes.number.isRequired,
  num_likes: PropTypes.number.isRequired,
  // onDelete will be a function passed down from App that makes an API call to delete a sticky
  onDelete: PropTypes.func.isRequired,
  // onLike will be a function passed down from App that makes an API call to like a sticky
  onLike: PropTypes.func.isRequired,
};

export default Sticky;
