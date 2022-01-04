const Board = (props) => {
  const boardTitle = props.singleBoard.title;
  const board = props.singleBoard;
  const onSelectedBoard = props.onSelectedBoard;

  return (
    <div
      class="p-3 mb-2 bg-info text-white"
      onClick={() => onSelectedBoard(board)}
    >
      <h5>{boardTitle}</h5>
    </div>
  );
};

export default Board;
