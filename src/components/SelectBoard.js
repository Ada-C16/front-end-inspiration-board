import "./SelectBoard.css";


const SelectBoard = (props) => {
  // console.log(props.boardData);

  const boardList = props.boardData.map((board) => {
    return (
      <option key={board.board_id} value={board.id}>
        {board.title}
      </option>
    );
  });

  return (
    <div className="container pt-3 select-board">
      <h2>Select a Board</h2>
      <select className="custom-select" size="6" onChange={props.onSelectBoard}>
        {boardList}
      </select>
    </div>
  );
};

export default SelectBoard;

// https://getbootstrap.com/docs/4.5/components/forms/#custom-forms
