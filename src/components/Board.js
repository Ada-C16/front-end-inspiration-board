import React from 'react';
import './Board.css';
import Card from './Card';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import axios from 'axios';
import {useState} from 'react';

const getCards = () => {
    //return cards from API call
    return [{text: "text",
        board_id: 1},
        {text: "text1",
        board_id: 2}]
}

const Board = ({board_id}) => {
    const [owner, setOwner] = useState(null);
    const [title, setTitle] = useState(null);
    //useState for owner and title
    useEffect(() => {
        if (board_id == null) {
        return
        }
        axios
            .get(
                `http://localhost:5000/board/${board_id}`
            )
            .then((response) => {
                setOwner(response.data["board"]["owner"]);
                setTitle(response.data["board"]["title"]);
                //setCards([...response.data]);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
}, [board_id]);
    //const cardComponents = cards.map((board) => {
        return (
            <section>
            key={board_id}
            board_id={board_id}
            title={title}
            owner={owner}
            </section>
        );
    //the get request (cards, updateCards);
    //get board/boardId/cards
    //cards are passed as a prop to the board after GET request in /app
    //return <div className="board">{cardComponents}</div>;
}

Board.propTypes = {
    //title: PropTypes.string,
    board_id: PropTypes.number.isRequired,
    //owner: PropTypes.string
}
export default Board