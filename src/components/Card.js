import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const Card = ({card}) => {
    return (
        <li key={card.card_id}>{card.message}
            <Counter/>
        </li>
    );
}

export default Card;