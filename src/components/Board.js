import React from 'react';
import './Board.css';
import Card from './Card';
import PropTypes from 'prop-types';

const getCards = () => {
    //return cards from API call
    return [{text: "text",
        board_id: 1},
        {text: "text1",
        board_id: 2}]
}

const Board = ({title, board_id, cards}) => {
    const cardComponents = cards.map((board) => {
        return (
            <Board
            key={board.board_id}
            board_id={board.board_id}
            title={board.title}
            owner={board.owner}
        />
        );
    });
    //the get request (cards, updateCards);
    //get board/boardId/cards
    //cards are passed as a prop to the board after GET request in /app
    return <div className="board">{cardComponents}</div>;
}

Board.propTypes = {
    title: PropTypes.string.isRequired,
    board_id: PropTypes.number.isRequired,
    owner: PropTypes.string
}
export default Board