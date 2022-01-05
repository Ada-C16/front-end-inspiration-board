import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

const Card = (props) => {


    const cardLikeButtonClick = () =>{
        props.onClickCallback(props.card_id);
    };

    return (
            <div className='Card'>
                {props.message}
            <button
                className="square"
                onClick={cardLikeButtonClick}
                id={props.card_id}
            > 
            </button>
            </div>

    );

};

Card.propTypes = {
  message: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  card_id: PropTypes.number.isRequired,
};

export default Card;