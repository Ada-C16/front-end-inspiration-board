import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Card.css';

const Card = (props) => {


    const cardLikeButtonClick = () =>{
        props.onClickCallbackLikes(props.card_id);
    };

    const cardDelete = () =>{
        props.onClickCallbackDeleteCard(props.card_id);
    }

    return (
            <div className='Card'>
                <p>Message: {props.message}</p>
                <p># of Likes: {props.likes_count}</p>
                <button
                    className="btn"
                    onClick={cardLikeButtonClick}
                    id={props.card_id}
                >
                    Like
                </button>

                <button
                    className="btn"
                    onClick={cardDelete}
                    id={props.card_id}
                >
                    Delete
                </button>

            </div>

    );

};

Card.propTypes = {
    onClickCallbackLikes: PropTypes.func.isRequired,
    onClickCallbackDeleteCard: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    card_id: PropTypes.number.isRequired,
    likes_count: PropTypes.number.isRequired,
};

export default Card;