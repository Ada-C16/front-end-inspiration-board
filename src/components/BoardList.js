import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import './BoardList.css';

const BoardList = ({ boards, onClickBoard}) => {
    const getBoardListJSX = (boards) => {
        return boards.map((board) => {
            return (<Board key={board.id} id={board.id} owner={board.owner} title={board.title} onClickBoard={onClickBoard}/>
                );
            });
        };

    return <ol>{getBoardListJSX(boards)}</ol>;
};

BoardList.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            owner: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            })
            ).isRequired,
            onClickBoard: PropTypes.func.isRequired
        };

export default BoardList;