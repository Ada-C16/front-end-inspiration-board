import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';



const Card = ({card}) => {
    const [votes, setVotes] = useState(card.votes)
    const onClick = () => {
        console.log('votes clicked')
        console.log(typeof(votes))
        setVotes(votes + 1)
    }

    return (
        <li key={card.card_id}>{card.message}
            <Counter onClick={onClick} value={votes}/>
        </li>
    );
}

export default Card;