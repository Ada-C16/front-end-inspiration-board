import React from 'react';
import './Board.css';
import Card from './Card';
import PropTypes from 'prop-types';


const generateCards = (board_id, onClickCallback) => {
    // This will call the API to get all of the cards for this board_id

};

const Board = ({ squares, onClickCallback }) => {
    const squareList = generateSquareComponents(squares, onClickCallback);
    return(
        <div className="grid" >
            {squareList}
        </div>
    );
};

Board.propTypes = {
    squares: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                board_id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                owner: PropTypes.string.isRequired
            })
        )
    ),
    onClickCallback: PropTypes.func.isRequired,
};

export default Board;
