import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Card.css';

const Card = (props) => {


    const cardLikeButtonClick = () =>{
        props.onClickCallback(props.card_id);
    };

    return (
            <div className='Card'>
                {props.message}
                {props.likes_count}
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
    onClickCallback: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    card_id: PropTypes.number.isRequired,
    likes_count: PropTypes.number.isRequired,
};

export default Card;