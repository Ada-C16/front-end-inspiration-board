import PropTypes from "prop-types";
import './Card.css'

const Card = (props) => {
  return (
    <ul className="card">
      <li className="message">{props.card.message}</li>
      <li className="likes">
        {props.card.likes_count} 
        <span onClick={() => props.onLike(props.card)}> 💚</span>
      </li>
      {/* <li onClick={() => props.onLike(props.card)}>+1</li> */}
      <li 
        className="delete"
        onClick={() => props.onCardDelete(props.card)}>
          Delete
      </li>
      
    </ul>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    }).isRequired,
  onLike: PropTypes.func.isRequired,
  onCardDelete: PropTypes.func.isRequired,
};

export default Card;