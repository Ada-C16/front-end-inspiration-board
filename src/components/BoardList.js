import PropTypes from "prop-types";
import Board from "./Board";
import "./BoardList.css";

const BoardList = ({ boards, onBoardSelect }) => {

  const getBoardList = (boards) => {
    return boards.map((board,index) => {
      return (
        <Board
          board={board}
          key={board.id}
          id={board.id}
          title={board.title}
          owner={board.owner}
          onBoardSelect={onBoardSelect}
          index={index}
        />
      );
    });
  };
  return <ul className="BoardListArea">{getBoardList(boards)}</ul>;
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
  onBoardSelect: PropTypes.func,
};

export default BoardList;
