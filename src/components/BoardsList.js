import PropTypes from "prop-types";
import "./BoardsList.css";
import BoardTitle from "./BoardTitle.js";

const BoardsList = (props) => {
  const boards = props.boardsData;

  const BoardList = boards.map((board) => {
    return (
      <BoardTitle
        key={board.id}
        boardData={board}
        updateCurrentBoard={props.updateCurrentBoard}
      />
    );
  });

  return (
    <div className='boards-list-style'>
      <h2>Boards</h2>
      <section>{BoardList}</section>
    </div>
  );
};

BoardsList.propTypes = {
  updateCurrentBoard: PropTypes.func,
  boardsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      owner_name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default BoardsList;
