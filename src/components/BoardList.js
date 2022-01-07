import "./BoardList.css";
import Board from "./Board";

const BoardList = (props) => {
  const individualBoardComponents = props.boards.map((board) => {
    return (
      <li key={board.id}>
        <Board board={board} OnSelectBoard={props.OnSelectBoard} />
      </li>
    );
  });

  return (
    <>
      <div className="boardlist">
        <h2>Pick a Board from this List: </h2>
        <ol>{individualBoardComponents}</ol>
      </div>

      <div className="selectedboard">
        <h3>The Board You Selected:</h3>

        <h2>{props.selectedBoard.title}</h2>
      </div>
    </>
  );
};

export default BoardList;
