import PropTypes from "prop-types";

const BoardSelector = ({ boards, onSelectBoard }) => {
  const handleBoardChange = (event) => {
    const id = event.target.value;
    if (id !== "0") {
      onSelectBoard(id);
    }
  };

  return (
    <select onChange={handleBoardChange}>
      <option value="0">Select Board</option>
      {boards.map((board) => {
        return (
          <option key={board.id} value={board.id}>
            {board.title}
          </option>
        );
      })}
    </select>
  );
};

export default BoardSelector;
