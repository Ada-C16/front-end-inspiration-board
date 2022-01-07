const Board = (props) => {
  return (
    <div onClick={() => props.OnSelectBoard(props.board)}>
      <h3>{props.board.title}</h3>
    </div>
  );
};
export default Board;
