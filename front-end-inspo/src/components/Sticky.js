import React from 'react';
import PropTypes from 'prop-types';

import './Sticky.css';

const Sticky = (props) => {
  return (
    <div className="sticky">
      <button className="sticky-delete" onClick={props.onDelete}>
        X
      </button>
      <article className="sticky-text">
        {props.text}
      </article>
      
      <div className="sticky-footer">
        <span className="sticky-timestamp">
          {props.timestamp}
        </span>
        <div className="sticky-likes">
          <button className="like-button" onClick={props.onLike}>
            Like
          </button>
          <span className="likes-count">
            + {props.likes}
          </span>
        </div>
      </div>

      
    </div>
  );
};


Sticky.propTypes = {
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  // onDelete will be a function passed down from App that makes an API call to delete a sticky
  onDelete: PropTypes.func.isRequired,
  // onLike will be a function passed down from App that makes an API call to like a sticky
  onLike: PropTypes.func.isRequired

};

export default Sticky;
