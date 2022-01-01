import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

const CardList = ({cards, onClickLike, onClickDelete}) => {
    const getBoardListJSX = (cards) => {
        return cards.map((card) => {
            return (
                    <Card 
                        key={card.id} 
                        id={card.id} 
                        message={card.message} 
                        likes_count={card.likes_count} 
                        onClickLike={onClickLike} 
                        onClickDelete={onClickDelete}
                    />
                );
            });
        };

    return <ol>{getBoardListJSX(cards)}</ol>;
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likes_count: PropTypes.number.isRequired,
            })
            ).isRequired,
            onClickLike: PropTypes.func.isRequired, 
            onClickDelete: PropTypes.func.isRequired,
        };

export default CardList;