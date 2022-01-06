import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board.js'

const Boards = ({boards, onClickSelectBoard}) => {
  const listItems = boards.map((board) => <Board board= {board} onClick={onClickSelectBoard}/>); 
  return (<ol> {listItems} </ol>); 
};

export default Boards;