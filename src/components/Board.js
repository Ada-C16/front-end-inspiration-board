import React from 'react';
import PropTypes from 'prop-types';

const Board = ({board}) => {
 return (<li key={board.board_id}>{board.title}</li>);
}

export default Board;