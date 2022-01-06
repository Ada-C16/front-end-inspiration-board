import React, { useState, useEffect } from 'react';
// import './Board.css';
import Card from './Card';
import PropTypes from 'prop-types';

import axios from 'axios';
import * as ada from '../ada';




const generateCards = (board_id, onClickFunction) => {
    // This will call the API to get all of the cards for this board_id
    console.log('in generateCards');

    let renderedOutput = [];
    //Call the API and get the list of boards
    axios.get(ada.api_url + '/cards/' + board_id)
    .then(response => {
        //create a loop through response.data and push to an renderedOutput array the Card elements
        for (let i=0; i<(response.data).length; i++){
            renderedOutput.push(<Card card_id={(response.data).card_id} likes_count={(response.data).likes_count} message={(response.data).message} onClickCallback={onClickFunction}/>)
        }
    })

    return(
        renderedOutput
    )
};

const Board = ( props ) => {
    console.log('in Board, props: ' + props)
    const cardList = generateCards(props.board.board_id, props.onClickCallback);
    return(
        <div>
            <div>
                <div className='H1'>{props.board.title}</div>
            </div>
            <div className="grid">
                {cardList}
            </div>
        </div>

    );
};

Board.propTypes = {
    onClickCallback: PropTypes.func.isRequired,
    board:PropTypes.shape({
            board_id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired
        })
};

export default Board;
