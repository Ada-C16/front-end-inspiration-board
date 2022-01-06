import React from 'react';
import PropTypes from 'prop-types';

const Board = ({board, onClick}) => {
 return (<li key={board.board_id} boardId={board.board_id} onClick={onClick}>{board.title}</li>);
}

export default Board;