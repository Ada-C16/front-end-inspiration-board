import PropTypes from "prop-types";

const CurrentBoard = ({ board }) => {
  return <h2>{board.title}</h2>;
};

CurrentBoard.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default CurrentBoard;
