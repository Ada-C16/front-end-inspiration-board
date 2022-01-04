import React from 'react';
import './Board.css';
import CardList from './CardList';
import Card from './Card';
import PropTypes from 'prop-types';


const generateCardComponents = (cards, updateCards) => {
    cards.push(updateCards)
    //add the most recent change to the list of cards
    //map?
}

const Board = ({cards, updateCards}) => {
    const cardList = generateCardComponents (cards, updateCards);
    return <div className="grid">{cardList}</div>;
}

Board.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}
export default Board

// create  a function to generate all the cards (like in tic tac toe)


// const squaresArray = singleArray.map((square) => {
//     return (
//       <Square
//         key={square.id}
//         id={square.id}
//         value={square.value}
//         updateSquares={updateSquares}
//       ></Square>
//     );
//   });
//   return squaresArray;