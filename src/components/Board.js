import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  return (
    <li className="ListItem" onClick={() => props.onBoardSelect(props.board)}>
      {props.index+1}. {props.title}
    </li>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onBoardSelect: PropTypes.func,
};

export default Board;
