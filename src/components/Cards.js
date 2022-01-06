import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js'



const Cards = ({cards}) => {
    const listItems = cards.map((card) => <Card card= {card}/>); 
    return (<ol> {listItems} </ol>); 
};

export default Cards;