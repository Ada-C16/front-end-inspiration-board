import React, { useState, useEffect } from 'react';
// import './Board.css';
import Card from './Card';
import PropTypes from 'prop-types';

import axios from 'axios';
import * as ada from '../ada';




const Board = ( props ) => {

    const newCardFormFunction = () => {
        props.onClickCallbackNewCard();
    }

    const onClickLikesFunction = (card_id) => {
        props.onClickCallbackLikes(card_id);
    }

    const deleteBoardFunction = () => {
        props.onClickCallbackDeleteBoard();
    }
    
    const generateCards = (board_id, onClickFunction) => {
        // This will call the API to get all of the cards for this board_id
        console.log('in generateCards');
    
        let renderedOutput = [];
        //Call the API and get the list of boards
        axios.get(ada.api_url + '/boards/' + board_id + '/cards')
        .then(response => {
            //create a loop through response.data and push to an renderedOutput array the Card elements
            let myObj = response.data;
            for (let i=0; i<myObj.length; i++){
                renderedOutput.push(<Card card_id={myObj.card_id} likes_count={myObj.likes_count} message={myObj.message} onClickCallbackLikes={onClickLikesFunction}/>)
            }
        })
    
        return(
            renderedOutput
        )
    };
        
    console.log('in Board, props: ' + props)
    const cardList = generateCards(props.board.board_id, props.onClickCallbackLikes);
    return(
        <div>
            <div>
                <div className='H1'>{props.board.title}</div>
                <button key="a1" onClick={deleteBoardFunction}>Delete This Board</button>
                <button key="a2" onClick={newCardFormFunction}>Create A Card</button>

            </div>
            <div className="grid">
                {cardList}
            </div>
        </div>

    );
};

Board.propTypes = {
    onClickCallbackLikes: PropTypes.func.isRequired,
    onClickCallbackNewCard: PropTypes.func.isRequired,
    onClickCallbackDeleteBoard: PropTypes.func.isRequired,
    board:PropTypes.shape({
            board_id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired
        })
};

export default Board;
