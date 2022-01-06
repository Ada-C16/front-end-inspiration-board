import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import axios from 'axios';



const Card = ({card}) => {
    const [likeCount, setLikeCount] = useState(card.like_count)
    // const [thisCard, setThisCard] = useState(card)
    const onClick = () => {
        axios.put(`https://kids-in-covid-board.herokuapp.com/cards/${card.id}/like`)
        .then(res => {
            console.log('upvoted')
            const newLikeCount = likeCount + 1;
            setLikeCount(newLikeCount)})
        .catch(error => {console.log("no like update")})
        
    }

    return (
        <li key={card.card_id}>{card.message}
            <Counter onClick={onClick} value={likeCount}/>
        </li>
    );
}

export default Card;