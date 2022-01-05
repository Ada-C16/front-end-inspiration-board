import React from 'react';
import './Board.css';
import CardList from './CardList';
import Card from './Card';
import PropTypes from 'prop-types';

const getCards = () => {
    //return cards from API call
    return [{text: "text",
        id: 1},
        {text: "text1",
        id: 2}]
}

const Board = ({title, id, cards}) => {
    const cardList = null //the get request (cards, updateCards);
    //get board/boardId/cards
    //cards are passed as a prop to the board after GET request in /app
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