import React from 'react';
import Card from './Card';

function CardList(props) {

    const allCards = props.cardsDisplay.map((card, index) => {
        // if (card.board_id === props.currentBoard) {
        return (<div key={card.id.toString()}>
            <Card 
            card={card} 
            checkCard={props.cards} 
            currentBoard={props.currentBoard}
            getCardList={props.getCardList}/>
            </div>
        )
    // }
    //     else return null;
    })

    return (
        <ol className='all-cards'>
            {allCards}
        </ol>
    )
};

export default CardList;