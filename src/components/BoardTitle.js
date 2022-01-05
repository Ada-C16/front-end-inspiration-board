import PropTypes from "prop-types";
import "./BoardTitle.css";

const BoardTitle = (props) => {
  const selectCurrentBoard = () => {
    const newCurrentBoard = {
      id: props.boardData.id,
      owner_name: props.boardData.owner_name,
      title: props.boardData.title,
    };
    props.updateCurrentBoard(newCurrentBoard);
  };

  return (
    <section className='board-style'>
      <button  className="btn btn-primary" onClick={selectCurrentBoard}>{props.boardData.title}</button>
    </section>
  );
};

BoardTitle.propTypes = {
  updateCurrentBoard: PropTypes.func,
  boardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    owner_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default BoardTitle;
