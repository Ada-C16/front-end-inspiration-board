import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board.js'

const Boards = ({boards}) => {
  const listItems = boards.map((board) => <Board board= {board}/>); 
  return (<ol> {listItems} </ol>); 
};

export default Boards;