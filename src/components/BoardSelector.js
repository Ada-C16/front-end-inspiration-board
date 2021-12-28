import React from "react";

function BoardSelector({ boards, onSelectBoard }) {
  const updateCurrentBoard = (event) => {
    const id = event.target.value;
    if (id !== "0") {
      onSelectBoard(id);
    }
  };

  return (
    <select onChange={updateCurrentBoard}>
      <option value="0" default>
        Select Board
      </option>
      {boards.map((board) => {
        return (
          <option key={board.id} value={board.id}>
            {board.title}
          </option>
        );
      })}
    </select>
  );
}

export default BoardSelector;
