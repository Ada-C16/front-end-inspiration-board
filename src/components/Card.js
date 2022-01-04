import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';



const Card = ({card}) => {
    const [likeCount, setLikeCount] = useState(card.like_count)
    const onClick = () => {
        console.log('upvoted')
        const newLikeCount = likeCount + 1
        setLikeCount(newLikeCount)
    }

    return (
        <li key={card.card_id}>{card.message}
            <Counter onClick={onClick} value={likeCount}/>
        </li>
    );
}

export default Card;