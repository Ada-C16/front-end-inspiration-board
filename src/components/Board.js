import React, { useState, useEffect } from 'react';
// import './Board.css';
import CardList from './CardList';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as ada from '../ada';



const Board = ( props ) => {
    const newCardFormFunction = () => {
        props.onClickCallbackNewCard(props.board.board_id);
    }

    const deleteBoardFunction = (props) => {
        props.onClickCallbackDeleteBoard(props.board.board_id);
    }
    

        
    console.log('in Board, props: ' + JSON.stringify(props));

    let renderedCardList = [];

    if (props.Cards !== []){
        renderedCardList.push(<CardList Cards={props.Cards} board_id={props.board.board_id} onClickCallbackLikes={props.onClickCallbackLikes} onClickCallbackDeleteCard={props.onClickCallbackDeleteCard} />)
    }

    return(
        <div>
            <div>
                <div className='H1'>{props.board.title}</div>
                <button key="a1" onClick={deleteBoardFunction}>Delete This Board</button>
                <button key="a2" onClick={newCardFormFunction}>Create A Card</button>

            </div>
            <div className="grid">
                {renderedCardList}
            </div>
        </div>

    );
};

Board.propTypes = {
    onClickCallbackLikes: PropTypes.func.isRequired,
    onClickCallbackNewCard: PropTypes.func.isRequired,
    onClickCallbackDeleteBoard: PropTypes.func.isRequired,
    onClickCallbackDeleteCard:PropTypes.func.isRequired,
    board:PropTypes.shape({
            board_id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired
        }),
    Cards:PropTypes.arrayOf(
        PropTypes.shape({
            Card_id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired
        })    
    )
};

export default Board;
