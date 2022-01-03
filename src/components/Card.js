import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Card = ({ id, text, likes, onClickLike, onClickDelete}) => {
    return (
    <li>
        Card {id}: {text} Likes: {likes} <button onClick={()=>{onClickLike(id)}}> +1 </button> <button onClick={()=>{onClickDelete(id)}}>Delete</button>
    </li>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired, 
    onClickLike: PropTypes.func.isRequired, 
    onClickDelete: PropTypes.func.isRequired,
};