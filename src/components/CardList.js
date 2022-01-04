import React from "react";
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards, onLike, onDelete }) =>{
  //cardlist renders the form
  //some logic to make the form display
  //some logic to read form data?


  //container for the cards
  //loop through the cardlist 
  const cardComponents = cards.map((card) => { 
    return(
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likes={card.likes}
        onLike={onLike}
        onDelete={onDelete}
      />
    )
  });
  
  
  return (<ul className="cards_list_no_bullets">{cardComponents}</ul>);
};
//create proptypes
CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default CardList;



//----------------------------------------